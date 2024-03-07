import { 
    CiHome as HomeIcon,
    CiUser as ProfileIcon,
    CiStar as ReviewsIcon,
    CiBookmark as FavoriteIcon,
    CiLogout as ExitIcon
} from "react-icons/ci";

import { 
    IoIosHelpCircleOutline as HelpIcon 
} from "react-icons/io";


export const services = {
    main:[
        {
            text: 'Home',
            icon:  HomeIcon,
            to: '/'
        },
        {
            text: 'Profile',
            icon:  ProfileIcon,
            to: '/profile'
        },
        {
            text: 'Reviews',
            icon:  ReviewsIcon,
            to: '/reviews'
        },
        {
            text: 'Favorites',
            icon:  FavoriteIcon,
            to: '/favorites'
        },
    ],
    another:[
        {
            text: 'Help',
            icon:  HelpIcon,
            to: '/help'
        },
        // {
        //     text: 'Exit',
        //     icon:  ExitIcon,
        //     to: '/exit'
        // },
    ]
}