import { Link, useLocation } from 'react-router-dom'

const logo = "/Hollys_Logo.png"
const navCrown = "/Navbar/crown.png"
const navFacebook = "/Navbar/facebook.png"
const navInstagram = "/Navbar/instagram.png"

const NAV_ITEMS = [
    { label: '메뉴찾기', path: '/menu' },
    { label: '할리스 몰', path: '#' },
    { label: '멤버십', path: '#' },
    { label: '할리스 소식', path: '#' },
    { label: '매장검색', path: '#' },
    { label: '브랜드소개', path: '/about' },
]

export default function Navbar() {
    const location = useLocation()

    return (
        <div className="bg-white flex flex-col h-[138px] items-start justify-between overflow-clip px-[260px] fixed top-0 left-0 right-0 w-full z-50 shadow-sm">
            {/* 상단 유틸리티 바 */}
            <div className="flex h-[56px] items-end justify-end overflow-clip w-full">
                <div className="flex gap-[10px] items-center">
                    <div className="flex gap-[8px] h-[27px] items-center">
                        <Link to="#" className="text-[#575757] text-[14px] font-medium">로그인</Link>
                        <span className="text-[#cfcfcf] text-[12px] font-light">|</span>
                        <Link to="#" className="text-[#575757] text-[14px] font-medium">회원가입</Link>
                        <span className="text-[#cfcfcf] text-[12px] font-light">|</span>
                        <Link to="#" className="text-[#575757] text-[14px] font-medium">고객센터</Link>
                    </div>
                    <div className="border border-[rgba(87,87,87,0.5)] flex h-[21px] items-center justify-center rounded-[50px] w-[79px] cursor-pointer ml-[12px]">
                        <span className="text-[#575757] text-[13px] font-normal">English</span>
                    </div>
                </div>
            </div>

            {/* 메인 네비게이션 바 */}
            <div className="flex gap-[153px] items-start justify-center w-full">
                {/* 로고 */}
                <Link to="/" className="flex h-[83px] items-start justify-between w-[84px]">
                    <img src={logo} alt="Hollys" className="h-[69px] w-[78px] object-contain" />
                </Link>

                {/* 네비게이션 메뉴 */}
                <div className="flex items-start py-[18px]">
                    <div className="flex gap-[64px] items-center justify-center p-[10px] text-[22px] w-[881px]">
                        {NAV_ITEMS.map(({ label, path }) => {
                            const isActive = location.pathname === path
                            return (
                                <Link
                                    key={label}
                                    to={path}
                                    className={`whitespace-nowrap ${isActive ? 'text-[#c1312f] font-bold' : 'text-black font-medium hover:text-[#c1312f] transition-colors'}`}
                                >
                                    {label}
                                </Link>
                            )
                        })}
                    </div>
                </div>

                {/* SNS 아이콘 */}
                <div className="flex items-center gap-[10px] py-[24px]">
                    <a href="#" className="flex items-center justify-center w-[37px] h-[33px] hover:opacity-80 transition-opacity">
                        <img src={navInstagram} alt="instagram" className="w-full h-full object-contain" />
                    </a>
                    <a href="#" className="flex items-center justify-center w-[37px] h-[33px] hover:opacity-80 transition-opacity">
                        <img src={navFacebook} alt="facebook" className="w-full h-full object-contain" />
                    </a>
                    <a href="#" className="flex items-center justify-center w-[37px] h-[33px] hover:opacity-80 transition-opacity">
                        <img src={navCrown} alt="crown" className="w-full h-full object-contain" />
                    </a>
                </div>
            </div>
        </div>
    )
}
