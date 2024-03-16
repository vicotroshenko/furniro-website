import { useEffect, useState } from "react";
import Modal from "../Modal";
import { IoClose } from "react-icons/io5";
import "./ModalNotification.css";
import { useGoodsContext } from "../../../hooks/useGoodsContext";

const ModalNotification = () => {
  const [visibility, setVisibility] = useState<boolean>(false);
  const [timer, setTimer] = useState<number>(0);

  const { goodsState } = useGoodsContext();

  useEffect(() => {
    let timerId: any = null;
    if (goodsState.status === "loading") {
      timerId = setInterval(() => setTimer((prev) => prev + 1), 1000);
      if (timer > 10 && timer <= 11) {
        setVisibility(true);
      }
    }
    if (goodsState.status === "success") {
      setVisibility(false);
    }
    return () => clearInterval(timerId);
  }, [timer, goodsState.status]);

  const toggle = () => {
    setVisibility((prev) => !prev);
  };

  return (
    <Modal toggle={toggle} visible={visibility}>
      <div className="modalNotifyContainer">
        <button
          type="button"
          aria-label="close notification"
          className="modalNotifyButton"
          onClick={() => toggle()}
        >
          <IoClose />
        </button>
        <p>
          <b>The first request may take time.</b> Don't worry, it is because I'm
          using free deploy on render.com. Web Services on the free instance type
          are automatically spun down after 15 minutes of inactivity. When a new
          request for a free service comes in, Render spins it up again so it
          can process the request. This can cause the first response delay.
        </p>
      </div>
    </Modal>
  );
};

export default ModalNotification;
