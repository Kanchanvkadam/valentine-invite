import { useSearchParams } from "react-router-dom";
import Valentine from "../components/Valentine";

export default function View() {
  const [params] = useSearchParams();

  const name = params.get("name");
  const sender = params.get("sender");

  return <Valentine name={name} sender={sender} />;
}
