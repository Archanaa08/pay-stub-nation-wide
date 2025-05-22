
import { Link } from 'react-router-dom';
import { Calculator } from 'lucide-react';

interface StateCardProps {
  name: string;
  path: string;
  abbreviation: string;
}

const StateCard: React.FC<StateCardProps> = ({ name, path, abbreviation }) => {
  return (
    <Link to={path} className="block">
      <div className="state-card">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-finance-light text-finance-primary font-bold">
              {abbreviation}
            </div>
            <h3 className="font-semibold text-lg text-finance-primary">{name}</h3>
          </div>
          <Calculator className="text-finance-secondary" size={20} />
        </div>
        <p className="mt-2 text-gray-600 text-sm">Calculate your {name} paycheck</p>
      </div>
    </Link>
  );
};

export default StateCard;
