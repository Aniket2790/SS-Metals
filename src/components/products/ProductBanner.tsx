import { PageBanner } from "@/components/banner/PageBanner";
import type { ProductSlug } from "@/lib/product-pages";

type ProductBannerProps = {
  slug: ProductSlug;
  name: string;
  title: string;
  subtitle: string;
};

export function ProductBanner({
  slug,
  name,
  title,
  subtitle,
}: ProductBannerProps) {
  return (
    <PageBanner
      variant={slug}
      eyebrow={name}
      title={title}
      subtitle={subtitle}
    />
  );
}
