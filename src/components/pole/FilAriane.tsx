import { Fragment } from "react";
import Link from "next/link";
import { SITE } from "@/lib/constants";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Conteneur } from "./pole-ui";

export interface FilArianeElement {
  label: string;
  /** Absent sur le dernier élément (page courante). */
  href?: string;
}

export interface FilArianeProps {
  /** Du plus général au plus précis : Accueil, Services, page courante. */
  elements: FilArianeElement[];
  className?: string;
}

export default function FilAriane({ elements, className }: FilArianeProps) {
  const dernier = elements.length - 1;
  return (
    <Conteneur className={className ?? "py-4"}>
      <Breadcrumb>
        <BreadcrumbList>
          {elements.map((el, i) => {
            const estDernier = i === dernier || !el.href;
            return (
              <Fragment key={`${el.label}-${i}`}>
                <BreadcrumbItem>
                  {estDernier ? (
                    <BreadcrumbPage>{el.label}</BreadcrumbPage>
                  ) : (
                    <BreadcrumbLink asChild>
                      <Link
                        href={el.href as string}
                        className="rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                      >
                        {el.label}
                      </Link>
                    </BreadcrumbLink>
                  )}
                </BreadcrumbItem>
                {!estDernier && <BreadcrumbSeparator />}
              </Fragment>
            );
          })}
        </BreadcrumbList>
      </Breadcrumb>
    </Conteneur>
  );
}

/** JSON-LD BreadcrumbList généré depuis la même liste que le fil d'Ariane visible. */
export function filArianeSchema(elements: FilArianeElement[], urlCourante: string) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: elements.map((el, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: el.label,
      item: el.href ? `${SITE.url}${el.href === "/" ? "" : el.href}` : `${SITE.url}${urlCourante}`,
    })),
  } as const;
}
