import im from './images/truck.svg';
import imm from './images/bag.svg';
import imma from './images/support.svg';
import immb from './images/return.svg';

function Abouts()

{
    return(<div>
         <div className="section3">
            <div className="section33">
            <div className="w">
         <div className="w1">Why Choose Us</div>
         <div className="w2">
         Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.
         </div>
         </div>
          <div className="yellowdots">
           <div className="light"></div>
          </div>
         <div className="d">

         <div className="truckone">
            <div className='trucks'>
            <div className="truck"> <img src={im} alt="image" /></div>
            <div className='circle1'></div>
            </div>
            <div className="d1">Fast & Free Shipping</div>
            <div className="d2">
            Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.
            </div>
            </div>
            
          
            <div className="bagone">
            <div className='bags'>
            <div className="bag"> <img src={imm} alt="image" /></div>
            <div className='circle2'></div>
            </div>
            <div className="d11">Easy to Shop
</div>
            <div className="d22">
            Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.
            </div>
            </div>
            
            
            <div className="supone">
            <div className='supports'>
            <div className="support"> <img src={imma} alt="image" /></div>
            <div className='circle3'></div>
            </div>
            <div className="d111">24/7 Support</div>
            <div className="d222">
            Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.
            </div>
            </div>

              
            <div className="returnone">
            <div className='returns'>
            <div className="return"> <img src={immb} alt="image" /></div>
            <div className='circle4'></div>
            </div>
            <div className="d1111">Hassle Free Returns</div>
            <div className="d2222">
            Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.
            </div>
            </div>

         </div>
     

        </div>
        </div>

         
    </div>)
}
export default Abouts;