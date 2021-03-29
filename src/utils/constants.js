import { HiOutlineDocumentReport } from 'react-icons/hi';
import { IoHelpCircleOutline } from 'react-icons/io5';
import {
	GrDownload,
	GrUnorderedList,
	GrStackOverflow,
	GrTicket,
} from 'react-icons/gr';
import { FaCrown, FaJediOrder, FaFirstOrder } from 'react-icons/fa';

// Map of icons to level 0 navigation items
export const NAV_ICONS = {
	reporting: HiOutlineDocumentReport,
	tickets: GrTicket,
	orders: FaJediOrder,
	castleGate: FaFirstOrder,
	inventory: GrStackOverflow,
	products: GrUnorderedList,
	premiumShelf: FaCrown,
	downloadCenter: GrDownload,
	helpAndSupport: IoHelpCircleOutline,
};

// URL to fetch the navigation data
export const NAV_DATA_API =
	'https://run.mocky.io/v3/b49604f2-3705-4e14-992f-1378fb4b598f?mocky-delay=1000ms';
