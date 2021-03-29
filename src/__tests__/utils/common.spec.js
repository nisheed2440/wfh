import { getNavIcon } from '../../utils/common';
import { FaRegSmile } from 'react-icons/fa';

describe('getNavIcon', () => {
    it('should return default smile icon', () => {
        expect(getNavIcon()).toEqual(FaRegSmile);
    });
    it('should return specific icon', () => {
        expect(getNavIcon('products')).not.toEqual(FaRegSmile);
    });
});

