type DefaultInputProps = {
  type: "text" | "number" | "search";
} & {
  abc: "number";
};

export function DefaultInput({ type }: DefaultInputProps) {
  return (
    <>
      <label htmlFor="meuInput">task</label>
      <input type={type} id="meuInput" />
    </>
  );
}
