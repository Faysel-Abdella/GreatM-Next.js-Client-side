const InputWithLabel = ({
  label,
  defaultValue,
  handelChangeText,
  mainStyles,
  titleStyles,
  inputParentStyles,
  inputStyles,
}: {
  label: string;
  defaultValue?: string;
  handelChangeText?: any;
  mainStyles?: string;
  titleStyles?: string;
  inputParentStyles?: string;
  inputStyles?: string;
}) => {
  return (
    <section className={`flex items-center gap-7 ${mainStyles}`}></section>
  );
};

export default InputWithLabel;
