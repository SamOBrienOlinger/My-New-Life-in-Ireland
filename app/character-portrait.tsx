import type { Character } from "./journey-data";

export function CharacterPortrait({
  character,
  eager = false,
}: {
  character: Pick<Character, "id" | "tone">;
  eager?: boolean;
}) {
  return (
    <div className={"avatar avatar-" + character.tone} aria-hidden="true">
      <picture>
        <source srcSet={"images/characters/" + character.id + ".webp"} type="image/webp" />
        <img
          src={"images/characters/" + character.id + ".jpg"}
          alt=""
          width={320}
          height={320}
          loading={eager ? "eager" : "lazy"}
          decoding="async"
        />
      </picture>
    </div>
  );
}
