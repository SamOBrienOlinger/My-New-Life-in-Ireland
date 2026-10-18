type FooterTaglineProps = {
  siteName: string;
  text: string;
};

export function FooterTagline({ siteName, text }: FooterTaglineProps) {
  const [before, after] = text.split("{siteName}");
  return <p>{before}<strong>{siteName}</strong>{after}</p>;
}
