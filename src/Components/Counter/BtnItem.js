import "./BtnItem.css";
function BtnItem({name, clk, text}) {
  return (
    <button className={name} onClick={clk}>
      {text}
    </button>
  );
}
export default BtnItem;
