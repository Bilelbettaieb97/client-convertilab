#!/bin/bash
# Vérifie que le dernier commit GitHub a bien déclenché un déploiement Vercel.
# Usage : ./scripts/check-deploy.sh
# Si pas de déploiement après 3 min, push un commit trigger automatiquement.
# Requiert VERCEL_TOKEN dans .env.local ou en variable d'environnement.

# Load token from .env.local if not set
if [ -z "$VERCEL_TOKEN" ] && [ -f ".env.local" ]; then
  export VERCEL_TOKEN=$(grep "^VERCEL_TOKEN=" .env.local | cut -d'=' -f2)
fi

if [ -z "$VERCEL_TOKEN" ]; then
  echo "❌ VERCEL_TOKEN manquant. Ajoute VERCEL_TOKEN=... dans .env.local"
  exit 1
fi

PROJECT_ID="prj_f27XGDnCfERty2l9d3fJBsEIQVn1"
TEAM_ID="team_Xl2lTtY9Ahy9vcbZU8DDe4Oi"
LAST_SHA=$(git rev-parse HEAD)
SHORT_SHA=$(git rev-parse --short HEAD)

echo "🔍 Vérification déploiement Vercel pour commit $SHORT_SHA..."

check_deployment() {
  curl -s "https://api.vercel.com/v6/deployments?projectId=$PROJECT_ID&teamId=$TEAM_ID&limit=5" \
    -H "Authorization: Bearer $VERCEL_TOKEN" | python3 -c "
import json,sys
d=json.load(sys.stdin)
target='$LAST_SHA'
for dep in d['deployments']:
    sha = dep.get('meta',{}).get('githubCommitSha','')
    if sha == target or sha.startswith(target[:7]):
        print(dep.get('state','UNKNOWN'))
        exit(0)
print('NOT_FOUND')
" 2>/dev/null
}

# Attendre max 3 minutes (18 x 10s)
for i in $(seq 1 18); do
  STATE=$(check_deployment)
  if [ "$STATE" = "READY" ]; then
    echo "✅ Déploiement Vercel OK — commit $SHORT_SHA en production"
    exit 0
  elif [ "$STATE" = "ERROR" ]; then
    echo "❌ Déploiement Vercel en ERREUR pour $SHORT_SHA"
    exit 1
  elif [ "$STATE" = "NOT_FOUND" ] && [ "$i" -eq 1 ]; then
    echo "⏳ Déploiement pas encore détecté, attente..."
  fi
  sleep 10
done

# Pas de déploiement détecté après 3 min → commit trigger
echo "⚠️  Aucun déploiement Vercel détecté pour $SHORT_SHA après 3 min."
echo "🚀 Push d'un commit trigger automatique..."
echo "# trigger $(date)" >> .vercel-deploy-trigger
git add .vercel-deploy-trigger
git commit -m "chore: vercel deploy trigger (webhook manqué pour $SHORT_SHA)"
git push origin main
echo "✅ Trigger envoyé. Vérifie le dashboard Vercel dans 2 min."
