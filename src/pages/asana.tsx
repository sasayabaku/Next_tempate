import Checkbox from '@mui/material/Checkbox';
import { motion } from 'framer-motion';

import Header from '../components/Header';

const TaskList = () => {
  return (
    <div className="h-screen p-8 flex-y overflow-y-scroll overscroll-contain">
      <div className="divide-y-2 divide-gray-300">
        <div className="py-1 pl-4 flex items-center">
          <Checkbox size="small" />
          <span className="pl-2">ペルソナ作成</span>
        </div>
        <div className="py-1 pl-4 flex items-center">
          <Checkbox size="small" />
          <span className="pl-2">カスタマージャーニーマップ</span>
        </div>
        <div className="py-1 pl-4 flex items-center">
          <Checkbox size="small" />
          <span className="pl-2">ユーザストーリーマッピング作成</span>
        </div>
        <div className="py-2 pl-4">カスタマージャーニーマップ</div>
        <div className="py-2 pl-4">ユーザストーリマッピング作成</div>
        <div className="py-2 pl-4">プロトタイプ作成</div>
        <div className="py-2 pl-4">ペルソナ作成</div>
        <div className="py-2 pl-4">カスタマージャーニーマップ</div>
        <div className="py-2 pl-4">ユーザストーリマッピング作成</div>
        <div className="py-2 pl-4">プロトタイプ作成</div>
        <div className="py-2 pl-4">ペルソナ作成</div>
        <div className="py-2 pl-4">カスタマージャーニーマップ</div>
        <div className="py-2 pl-4">ユーザストーリマッピング作成</div>
        <div className="py-2 pl-4">プロトタイプ作成</div>
        <div className="py-2 pl-4">ペルソナ作成</div>
        <div className="py-2 pl-4">カスタマージャーニーマップ</div>
        <div className="py-2 pl-4">ユーザストーリマッピング作成</div>
        <div className="py-2 pl-4">プロトタイプ作成</div>
        <div className="py-2 pl-4">ペルソナ作成</div>
        <div className="py-2 pl-4">カスタマージャーニーマップ</div>
        <div className="py-2 pl-4">ユーザストーリマッピング作成</div>
        <div className="py-2 pl-4">プロトタイプ作成</div>
      </div>
    </div>
  );
};

const Asana = () => {
  return (
    <div>
      <Header />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: 'easeOut', duration: 1 }}
      >
        <TaskList />
      </motion.div>
    </div>
  );
};

export default Asana;
