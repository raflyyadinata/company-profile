import { createSignal, type Component } from 'solid-js';
import imageSrc from '../assets/wong.png'
import imagesrc from '../assets/logo.png'
import imageeSrc from '../assets/robot.png'

const App: Component = () => {
    const [image, setImage] = createSignal(imageSrc);
    const [imagee, setimage] = createSignal(imagesrc);
    const [imageee, setimagee] = createSignal(imageeSrc);
    return (
        <div>

            <div class='bg'>
                <div class="circle">
                    <img src={image()} alt="Alternative Text" class="wong" elementtiming={''} fetchpriority={'high'} />
                    
                    
                </div>
                
                
                <img src={imagee()} alt="Alternative Text" class="logo" elementtiming={''} fetchpriority={'high'} />
                <div style="display: grid; place-items: center;" class='pcc'>
                    
                    <input type="text" placeholder="Username" class="input input-bordered input-error w-full max-w-xs"  />

                    <input type="text" placeholder="Email" class="input input-bordered input-error w-full max-w-xs" />

                    <input type="text" placeholder="Password" class="input input-bordered input-error w-full max-w-xs" />
                    
                    <button class="btn ahh">Button</button>

                </div>
                <img src={imageee()} alt="Alternative Text" class="robot" elementtiming={''} fetchpriority={'high'} />
            </div>
        </div>
    );
};

export default App;
