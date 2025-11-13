export const highlightText = (text, highlight) => {
  if (!highlight.trim()) return text;

  const regex = new RegExp(`(${highlight})`, "gi");
  return text.split(regex).map((part, index) =>
    regex.test(part) ? (
      <span key={index} style={{ backgroundColor: "yellow" }}>
        {part}
      </span>
    ) : (
      part
    )
  );
};
