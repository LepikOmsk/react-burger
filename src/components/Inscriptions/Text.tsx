type TText = {
  size: "small" | "medium" | "large" | "default";
  type: "main" | "inactive";
  className?: string;
  text: string;
};

const Text: React.FC<TText> = ({ text, type, size }) => {
  return (
    <>
      {type === "main" ? (
        <p className={`text text_type_main-${size}`}>{text}</p>
      ) : (
        <p className={`text text_type_main-${size} text_color_inactive`}>
          {text}
        </p>
      )}
    </>
  );
};

export default Text;
