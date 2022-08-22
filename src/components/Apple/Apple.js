import './Apple.css'
import { observer } from 'mobx-react-lite'
import { useRootStore } from '../../stores/RootStore';

function Apple() {
  const { appleStore } = useRootStore()
  return (
    <div className='apple'>
      <div className='apple-title'>苹果篮子</div>
      <div className='apple-total'>
        <ul>
          <li>
            <p>当前</p>
            <p>{appleStore.apples.length}个苹果，{appleStore.addWeightTotal}克</p>
          </li>
          <li>
            <p>已吃掉</p>
            <p>{appleStore.delAppleCount}个苹果，{appleStore.delAppleWeight}克</p>
          </li>
        </ul>
      </div>
      <div className='apple-list'>
        <ul>
          {
            appleStore.apples.map((apple, index) => (
              <li className='apple-item' key={index}>
                <div>
                  <p>红苹果 - {apple.num}号</p>
                  <p>{apple.weight}克</p>
                </div>
                <div onClick={() => appleStore.delApple(index)}>
                  <button>吃掉</button>
                </div>
              </li>
            ))
          }
        </ul>
      </div>
      <div className='apple-extract' onClick={appleStore.addApple}><button>摘苹果</button></div>
    </div>
  );
}

export default observer(Apple);
