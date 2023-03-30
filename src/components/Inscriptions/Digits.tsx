type TDigits = {
  number: string | number;
  size: "small" | "medium" | "large" | "default";
  type: "main" | "inactive";
  className?: string;
};

const Digits: React.FC<TDigits> = ({ number, size, type }) => {
  return (
    <>
      {type === "main" ? (
        <p className={`text text_type_digits-${size}`}>{number}</p>
      ) : (
        <p className={`text text_type_digits-${size} text_color_inactive`}>
          {number}
        </p>
      )}
    </>
  );
};

export default Digits;
