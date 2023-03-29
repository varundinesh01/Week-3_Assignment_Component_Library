import Input from "./Input";
import Radio from "./Radio";
import "./styles.css";
import SwitchComponent from "./SwitchComponent";
import SegmentedButton from "./SegmentedButton";
import Checkbox from "./Checkbox";

export default function App() {
  return (
    <div className="App">
      <Input />
      <Radio value="US" groupName="Country" />
      <Radio value="India" groupName="Country" />
      <Radio value="France" groupName="Country" />
      <br />
      <Radio value="Tonkotsu" groupName="Ramen" />
      <Radio value="Miso" groupName="Ramen" />
      <br />
      <SwitchComponent />
      <br />
      <Checkbox />
      <br />
      <SegmentedButton />
    </div>
  );
}
