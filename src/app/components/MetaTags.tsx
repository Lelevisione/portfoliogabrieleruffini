import { useEffect } from 'react';
import ogImage from 'figma:asset/558e08ce8d9e085f582ae2a9c842d611d74198da.png';

interface MetaTagsProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
}

export function MetaTags({
  title = 'Gabriele Ruffini - Creative Designer',
  description = 'Crafting visual experiences that tell stories. Where graphic design meets digital innovation.',
  image = ogImage,
  url = window.location.href,
}: MetaTagsProps) {
  useEffect(() => {
    // Update document title
    document.title = title;

    // Helper function to set or update meta tags
    const setMetaTag = (property: string, content: string, isName = false) => {
      const attribute = isName ? 'name' : 'property';
      let element = document.querySelector(`meta[${attribute}="${property}"]`);
      
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, property);
        document.head.appendChild(element);
      }
      
      element.setAttribute('content', content);
    };

    // Open Graph / Facebook
    setMetaTag('og:type', 'website');
    setMetaTag('og:url', url);
    setMetaTag('og:title', title);
    setMetaTag('og:description', description);
    setMetaTag('og:image', image);
    setMetaTag('og:image:width', '1200');
    setMetaTag('og:image:height', '630');

    // Twitter
    setMetaTag('twitter:card', 'summary_large_image', true);
    setMetaTag('twitter:url', url, true);
    setMetaTag('twitter:title', title, true);
    setMetaTag('twitter:description', description, true);
    setMetaTag('twitter:image', image, true);

    // Standard meta tags
    setMetaTag('description', description, true);
  }, [title, description, image, url]);

  return null;
}
