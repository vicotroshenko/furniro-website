import { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
import { useAppSelector } from "../../../hooks/useAppSelector";
import Modal from "../Modal";
import "./ModalNotification.css";

const ModalNotification = () => {
  const [visibility, setVisibility] = useState<boolean>(false);
  const [timer, setTimer] = useState<number>(0);
  const { status } = useAppSelector((state) => state.goods);

  useEffect(() => {
    let timerId: any = null;
    if (status === "loading") {
      timerId = setInterval(() => setTimer((prev) => prev + 1), 1000);
      if (timer > 10 && timer <= 11) {
        setVisibility(true);
      }
    }
    if (status === "success") {
      setVisibility(false);
    }
    return () => clearInterval(timerId);
  }, [timer, status]);

  const toggle = () => {
    setVisibility((prev) => !prev);
  };

  return (
    <Modal toggle={toggle} visible={visibility}>
      <div className="modalNotifyContainer">
        <button
          type="button"
          aria-label="close nitification"
          className="modalNotifyButton"
          onClick={() => toggle()}
        >
          <IoClose />
        </button>
        <p>
          <b>The first request may take time.</b> Don't worry, it is because I'm
          using free deploy on reder.com. Web Services on the free instance type
          are automatically spun down after 15 minutes of inactivity. When a new
          request for a free service comes in, Render spins it up again so it
          can process the request. This can cause the first response delay.
        </p>
      </div>
    </Modal>
  );
};

export default ModalNotification;
