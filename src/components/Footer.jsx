import { Link } from 'react-router-dom'

const navCrown = "/Navbar/crown.png"
const navFacebook = "/Navbar/facebook.png"
const navInstagram = "/Navbar/instagram.png"

const FOOTER_LINKS = [
    '개인정보처리방침',
    '서비스 이용약관',
    '멤버십 이용약관',
    '할리스카드 이용약관',
    '고객문의',
    '사이트맵',
    'BI 소개',
]

export default function Footer() {
    return (
        <div className="bg-[#c1312f] flex flex-col gap-[40px] items-start py-[40px] w-full mt-auto">
            {/* 상단 링크 영역 */}
            <div className="flex items-center px-[250px] w-full">
                <div className="flex gap-[10px] h-[27px] items-center">
                    {FOOTER_LINKS.map((link, idx) => (
                        <div key={link} className="flex items-center gap-[10px]">
                            <Link to="#" className="text-white text-[14px] font-normal whitespace-nowrap hover:opacity-80 transition-opacity">
                                {link}
                            </Link>
                            {idx < FOOTER_LINKS.length - 1 && (
                                <span className="text-white/50 text-[12px] font-light">|</span>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* 하단 정보 영역 */}
            <div className="flex justify-between items-end px-[250px] w-full pb-[20px]">
                <div className="text-white text-[12px] font-normal">
                    <p className="leading-[24px]">
                        법인명: (주)케이지에프앤비 대표자: 윤석찬 사업자등록번호 211-87-61044 통신판매업: 제2019-서울종로-0193호
                        <br />
                        주소 : 서울특별시 중구 통일로 92, 2층(순화동, 케이지타워) 대표전화 : 02-2188-7100 (가맹문의 : 02-6350-7229)
                    </p>
                    <p className="leading-[26px] mt-[10px]">COPYRIGHT (C) KG F&B. All Rights Reserved.</p>
                </div>
                <div className="flex gap-[10px] items-center">
                    <a href="#" className="flex items-center justify-center w-[37px] h-[33px] hover:opacity-80 transition-opacity">
                        <img src={navInstagram} alt="instagram" className="w-full h-full object-contain brightness-0 invert" />
                    </a>
                    <a href="#" className="flex items-center justify-center w-[37px] h-[33px] hover:opacity-80 transition-opacity">
                        <img src={navFacebook} alt="facebook" className="w-full h-full object-contain brightness-0 invert" />
                    </a>
                    <a href="#" className="flex items-center justify-center w-[37px] h-[33px] hover:opacity-80 transition-opacity">
                        <img src={navCrown} alt="crown" className="w-full h-full object-contain brightness-0 invert" />
                    </a>
                </div>
            </div>
        </div>
    )
}
