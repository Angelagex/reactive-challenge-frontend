import * as React from "react";
import { Offcanvas } from "react-bootstrap";
import { GiNotebook } from "react-icons/gi";
import { useSelector } from "react-redux";
import { Provider } from "../../state/slices/providerSlice";
import { RootState } from "../../state/Store";
import ItemInOffCavas from "./ItemInOffCanvas";
import moment from "moment";

interface IOffCanvasProps {}

const OffCanvas: React.FunctionComponent<IOffCanvasProps> = () => {
  const [providerName, setProviderName] = React.useState("");
  const [providerDocument, setProviderDocument] = React.useState("");

  const [show, setShow] = React.useState(false);
  const providers = useSelector((state: RootState) => state.provider.providers);
  const products = useSelector((state: RootState) => state.product.receipt);

  
  React.useEffect(() => {}, [products]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSave = ( e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    console.log('asdas');
    console.log(products);
    console.log(moment().format("YYYY/MM/DD"));
  };
  const handleProvider = (e: React.SyntheticEvent<HTMLSelectElement, Event>) => {
    setProviderName(e.currentTarget.value)
    setProviderDocument(e.currentTarget.id)
  }

  return (
    <>
      <GiNotebook
        onClick={handleShow}
        style={{ color: "white", fontSize: "1.5em" }}
        onPointerEnter={(e) => (e.currentTarget.style.color = "#0d6efd")}
        onPointerLeave={(e) => (e.currentTarget.style.color = "white")}
      />
      <Offcanvas
        show={show}
        onHide={handleClose}
        name="OffCanvas"
        placement="end"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>New Receipt</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <form>
            <div className="inputFormDiv">
              <label className="formLabel">Select a provider</label>
              <select
                id="provider"
                name="provider"
                className="selectLabel"
                onSelect={(e) => handleProvider(e)}
                required
              >
                {providers.map((provider: Provider, idx: any) => (
                  <option key={idx} id={provider.providerId.toString()} value={provider.name.toString()}>
                    {provider.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="offCanvasItemContainer">
              {products.map((item, idx) => (
                <ItemInOffCavas {...item} key={idx} />
              ))}
            </div>

            <button onClick={(e) => {handleSave(e)}}>Create Receipt!</button>
          </form>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default OffCanvas;
