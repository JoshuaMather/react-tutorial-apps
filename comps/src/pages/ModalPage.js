import { useState } from "react";
import Modal from "../components/Modal";
import Button from "../components/Button";

function ModalPage() {
    const [showModal, setShowModal] = useState(false);

    const handleClick = () => {
        setShowModal(true);
    }

    const handleClose = () => {
        setShowModal(false);
    }

    const actionBar = (
        <div>
            <Button onClick={handleClose} primary>I accept</Button>
        </div>
    );

    const modal = <Modal onClose={handleClose} actionBar={actionBar}>
        <p>
            Here is an important agreement for you to accept.
        </p>

    </Modal>

    return (
        <div>
            <Button onClick={handleClick} primary>Open Modal</Button>
           {showModal && modal } 
           <p>
           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ante est, malesuada eget vehicula eget, scelerisque eu urna. Fusce molestie consectetur felis nec porttitor. Sed interdum tellus ipsum, eu pharetra augue facilisis eu. Ut finibus, augue ut feugiat tempus, lacus risus gravida eros, eu convallis diam nulla eget orci. Praesent eros libero, feugiat sit amet dapibus id, lobortis ut tellus. Proin ac pharetra orci. Nam efficitur nisl vitae justo ullamcorper, non auctor turpis bibendum. Nam vitae lacinia massa. Nulla dictum ullamcorper ipsum, at finibus nunc gravida non. Pellentesque tristique arcu in dignissim pharetra. Donec dictum erat nisi, ut vulputate ipsum viverra non. Nam dapibus mollis consectetur.
           </p>
           <p>
           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ante est, malesuada eget vehicula eget, scelerisque eu urna. Fusce molestie consectetur felis nec porttitor. Sed interdum tellus ipsum, eu pharetra augue facilisis eu. Ut finibus, augue ut feugiat tempus, lacus risus gravida eros, eu convallis diam nulla eget orci. Praesent eros libero, feugiat sit amet dapibus id, lobortis ut tellus. Proin ac pharetra orci. Nam efficitur nisl vitae justo ullamcorper, non auctor turpis bibendum. Nam vitae lacinia massa. Nulla dictum ullamcorper ipsum, at finibus nunc gravida non. Pellentesque tristique arcu in dignissim pharetra. Donec dictum erat nisi, ut vulputate ipsum viverra non. Nam dapibus mollis consectetur.
           </p>
           <p>
           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ante est, malesuada eget vehicula eget, scelerisque eu urna. Fusce molestie consectetur felis nec porttitor. Sed interdum tellus ipsum, eu pharetra augue facilisis eu. Ut finibus, augue ut feugiat tempus, lacus risus gravida eros, eu convallis diam nulla eget orci. Praesent eros libero, feugiat sit amet dapibus id, lobortis ut tellus. Proin ac pharetra orci. Nam efficitur nisl vitae justo ullamcorper, non auctor turpis bibendum. Nam vitae lacinia massa. Nulla dictum ullamcorper ipsum, at finibus nunc gravida non. Pellentesque tristique arcu in dignissim pharetra. Donec dictum erat nisi, ut vulputate ipsum viverra non. Nam dapibus mollis consectetur.
           </p>
           <p>
           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ante est, malesuada eget vehicula eget, scelerisque eu urna. Fusce molestie consectetur felis nec porttitor. Sed interdum tellus ipsum, eu pharetra augue facilisis eu. Ut finibus, augue ut feugiat tempus, lacus risus gravida eros, eu convallis diam nulla eget orci. Praesent eros libero, feugiat sit amet dapibus id, lobortis ut tellus. Proin ac pharetra orci. Nam efficitur nisl vitae justo ullamcorper, non auctor turpis bibendum. Nam vitae lacinia massa. Nulla dictum ullamcorper ipsum, at finibus nunc gravida non. Pellentesque tristique arcu in dignissim pharetra. Donec dictum erat nisi, ut vulputate ipsum viverra non. Nam dapibus mollis consectetur.
           </p>
           <p>
           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ante est, malesuada eget vehicula eget, scelerisque eu urna. Fusce molestie consectetur felis nec porttitor. Sed interdum tellus ipsum, eu pharetra augue facilisis eu. Ut finibus, augue ut feugiat tempus, lacus risus gravida eros, eu convallis diam nulla eget orci. Praesent eros libero, feugiat sit amet dapibus id, lobortis ut tellus. Proin ac pharetra orci. Nam efficitur nisl vitae justo ullamcorper, non auctor turpis bibendum. Nam vitae lacinia massa. Nulla dictum ullamcorper ipsum, at finibus nunc gravida non. Pellentesque tristique arcu in dignissim pharetra. Donec dictum erat nisi, ut vulputate ipsum viverra non. Nam dapibus mollis consectetur.
           </p>
           <p>
           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ante est, malesuada eget vehicula eget, scelerisque eu urna. Fusce molestie consectetur felis nec porttitor. Sed interdum tellus ipsum, eu pharetra augue facilisis eu. Ut finibus, augue ut feugiat tempus, lacus risus gravida eros, eu convallis diam nulla eget orci. Praesent eros libero, feugiat sit amet dapibus id, lobortis ut tellus. Proin ac pharetra orci. Nam efficitur nisl vitae justo ullamcorper, non auctor turpis bibendum. Nam vitae lacinia massa. Nulla dictum ullamcorper ipsum, at finibus nunc gravida non. Pellentesque tristique arcu in dignissim pharetra. Donec dictum erat nisi, ut vulputate ipsum viverra non. Nam dapibus mollis consectetur.
           </p>

           <p>
           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ante est, malesuada eget vehicula eget, scelerisque eu urna. Fusce molestie consectetur felis nec porttitor. Sed interdum tellus ipsum, eu pharetra augue facilisis eu. Ut finibus, augue ut feugiat tempus, lacus risus gravida eros, eu convallis diam nulla eget orci. Praesent eros libero, feugiat sit amet dapibus id, lobortis ut tellus. Proin ac pharetra orci. Nam efficitur nisl vitae justo ullamcorper, non auctor turpis bibendum. Nam vitae lacinia massa. Nulla dictum ullamcorper ipsum, at finibus nunc gravida non. Pellentesque tristique arcu in dignissim pharetra. Donec dictum erat nisi, ut vulputate ipsum viverra non. Nam dapibus mollis consectetur.
           </p>
           <p>
           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ante est, malesuada eget vehicula eget, scelerisque eu urna. Fusce molestie consectetur felis nec porttitor. Sed interdum tellus ipsum, eu pharetra augue facilisis eu. Ut finibus, augue ut feugiat tempus, lacus risus gravida eros, eu convallis diam nulla eget orci. Praesent eros libero, feugiat sit amet dapibus id, lobortis ut tellus. Proin ac pharetra orci. Nam efficitur nisl vitae justo ullamcorper, non auctor turpis bibendum. Nam vitae lacinia massa. Nulla dictum ullamcorper ipsum, at finibus nunc gravida non. Pellentesque tristique arcu in dignissim pharetra. Donec dictum erat nisi, ut vulputate ipsum viverra non. Nam dapibus mollis consectetur.
           </p>
           <p>
           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ante est, malesuada eget vehicula eget, scelerisque eu urna. Fusce molestie consectetur felis nec porttitor. Sed interdum tellus ipsum, eu pharetra augue facilisis eu. Ut finibus, augue ut feugiat tempus, lacus risus gravida eros, eu convallis diam nulla eget orci. Praesent eros libero, feugiat sit amet dapibus id, lobortis ut tellus. Proin ac pharetra orci. Nam efficitur nisl vitae justo ullamcorper, non auctor turpis bibendum. Nam vitae lacinia massa. Nulla dictum ullamcorper ipsum, at finibus nunc gravida non. Pellentesque tristique arcu in dignissim pharetra. Donec dictum erat nisi, ut vulputate ipsum viverra non. Nam dapibus mollis consectetur.
           </p>
           <p>
           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ante est, malesuada eget vehicula eget, scelerisque eu urna. Fusce molestie consectetur felis nec porttitor. Sed interdum tellus ipsum, eu pharetra augue facilisis eu. Ut finibus, augue ut feugiat tempus, lacus risus gravida eros, eu convallis diam nulla eget orci. Praesent eros libero, feugiat sit amet dapibus id, lobortis ut tellus. Proin ac pharetra orci. Nam efficitur nisl vitae justo ullamcorper, non auctor turpis bibendum. Nam vitae lacinia massa. Nulla dictum ullamcorper ipsum, at finibus nunc gravida non. Pellentesque tristique arcu in dignissim pharetra. Donec dictum erat nisi, ut vulputate ipsum viverra non. Nam dapibus mollis consectetur.
           </p>
           <p>
           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ante est, malesuada eget vehicula eget, scelerisque eu urna. Fusce molestie consectetur felis nec porttitor. Sed interdum tellus ipsum, eu pharetra augue facilisis eu. Ut finibus, augue ut feugiat tempus, lacus risus gravida eros, eu convallis diam nulla eget orci. Praesent eros libero, feugiat sit amet dapibus id, lobortis ut tellus. Proin ac pharetra orci. Nam efficitur nisl vitae justo ullamcorper, non auctor turpis bibendum. Nam vitae lacinia massa. Nulla dictum ullamcorper ipsum, at finibus nunc gravida non. Pellentesque tristique arcu in dignissim pharetra. Donec dictum erat nisi, ut vulputate ipsum viverra non. Nam dapibus mollis consectetur.
           </p>
           
        </div>
    );

}

export default ModalPage;