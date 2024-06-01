import { FC } from "react";
import { useAccount } from "wagmi";

import { Modal } from "./modal";

export const CreateVault: FC<{ onClose: () => void }> = ({ onClose }) => {
    const { address } = useAccount();

    return (
        <Modal onCloseRequest={onClose}>
            <div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                iaculis magna efficitur, ultricies mi sed, malesuada turpis.
                Phasellus et congue eros, non mattis purus. Integer non tortor
                vel nunc cursus suscipit sollicitudin eu libero. Sed id lectus
                nec tellus venenatis varius id vel enim. Nam convallis enim at
                diam tristique dictum. Fusce fermentum metus at ultrices tempor.
                Ut quis justo ut augue hendrerit mollis. Integer eu dolor est.
                Maecenas non ornare est. Vivamus aliquet nibh sit amet lacus
                molestie, semper volutpat ex fermentum. Donec id cursus magna.
                Donec ac massa enim. Suspendisse consectetur consequat leo, vel
                fringilla felis fringilla eget. Suspendisse ultricies, ligula a
                condimentum elementum, ipsum leo fringilla magna, et interdum
                turpis risus semper justo. Sed feugiat eget lacus at euismod.
                Maecenas mattis odio ante, vel egestas nunc fermentum sit amet.
                Aliquam sapien urna, consequat nec accumsan eu, fermentum et
                nibh. Etiam ultricies purus nec lectus cursus ornare.
                Pellentesque quis nisi tempus erat tempor congue. Quisque
                pretium fringilla ligula quis vestibulum. Pellentesque eget
                neque eget eros tincidunt mattis. Mauris vehicula lectus dolor,
                et ornare orci finibus ac. Donec at enim lorem. Integer purus
                mi, sodales et aliquet a, lacinia eget erat. Suspendisse
                posuere, risus sed pharetra porttitor, enim mauris tincidunt
                turpis, ac ullamcorper turpis elit quis ante. Proin in luctus
                arcu, et auctor quam. Proin a odio ac ipsum scelerisque congue
                sed id ligula. Phasellus elementum arcu ante, id bibendum diam
                tincidunt eget. Praesent scelerisque nibh et tristique
                hendrerit. Donec leo quam, dignissim vitae consequat eu,
                fermentum et felis. Nam tincidunt blandit diam, ut malesuada sem
                euismod sit amet. Nam vestibulum felis sapien, tristique cursus
                ipsum malesuada faucibus. Nulla eu magna non turpis sollicitudin
                mattis ut id ex. Vivamus ac ligula mi. Aliquam mollis congue
                ornare. Nam at ipsum sem. Quisque nulla risus, tempus in
                ultricies at, aliquam ac urna. Mauris tristique sollicitudin
                nisl, eget faucibus mi aliquet at. Curabitur eu sollicitudin
                risus, at bibendum lacus. Morbi diam tellus, accumsan et feugiat
                vitae, interdum egestas neque. Nulla non cursus turpis, id
                maximus mauris. Nam volutpat accumsan tempus. Nulla facilisi.
                Cras ut ante sodales, fringilla augue in, egestas urna. Etiam
                non odio vitae tellus porta imperdiet et eget felis. Sed
                iaculis, leo ut sollicitudin molestie, lectus nulla lobortis
                mauris, non efficitur ex purus sed felis. Phasellus euismod enim
                sit amet lorem finibus, id iaculis nibh tempus. Quisque
                pellentesque auctor augue eget venenatis. Pellentesque faucibus
                consectetur mauris nec accumsan. Nam vel convallis est, eget
                placerat risus. Praesent quam est, blandit eu nibh gravida,
                viverra mattis enim. Maecenas tempor consectetur tincidunt.
                Praesent et quam a felis ullamcorper laoreet. Vestibulum mollis
                massa quam, vel elementum est suscipit at.
            </div>
        </Modal>
    );
};
