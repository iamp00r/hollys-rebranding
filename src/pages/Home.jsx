import { Link } from 'react-router-dom'

const banner = "/Home/banner.png"
const imgParfait = "/Home/두바이 파르페 1.png"
const imgBread = "/Home/두바이 쫀득쫀득 식방 1.png"
const imgComingSoon = "/Home/커밍순 아이콘.png"
const scrollLeft = "/Home/좌스크롤.png"
const scrollRight = "/Home/우스크롤.png"
const plusIcon = "/Home/더보기.png"
const searchIcon = "/Home/돋보기.png"
const imgMembership = "/Home/할리스 멤버쉽.png"
const imgGiftcard = "/Home/기프트카드.png"
const imgCrownEvent = "/Home/크라운 적립.png"
const logoNoText = "/Home/logoNotext.png" // HOLLYS NEW 옆 로고로 재사용

export default function Home() {
    return (
        <div className="bg-white flex flex-col gap-[120px] items-center relative w-[1920px] mx-auto overflow-hidden">
            {/* 히어로 영역 */}
            <div className="relative w-full" style={{ height: '862px' }}>
                <img src={banner} alt="메인 배너" className="absolute inset-0 object-cover size-full" />
            </div>

            {/* 신메뉴 소개 섹션 */}
            <div className="flex flex-col gap-[10px] items-start w-[1920px]">
                {/* 섹션 타이틀 */}
                <div className="flex justify-between h-[170px] items-start px-[260px] w-full">
                    <div className="flex flex-col gap-[10px] items-start py-[10px]">
                        <div className="flex gap-[10px] items-center py-[13px]">
                            <img src={logoNoText} alt="Hollys" className="h-[46px] object-contain" />
                            <p className="font-black text-[60px] text-black whitespace-nowrap tracking-tighter">HOLLYS NEW</p>
                        </div>
                        <div className="h-[34px] text-[#575757] text-[30px] font-normal">
                            <p>할리스의 신메뉴 두바이 쫀득 시리즈 지금 바로 할리스에서 만나보세요!</p>
                        </div>
                    </div>
                    <div className="flex items-end justify-end py-[10px] h-full pb-[35px]">
                        <Link to="/new-menu" className="hover:opacity-80 transition-opacity">
                            <img src={plusIcon} alt="더보기" className="size-[50px] object-cover rounded-[10px]" />
                        </Link>
                    </div>
                </div>

                {/* 메뉴 카드 섹션 */}
                <div className="flex gap-[20px] h-[618px] items-center justify-center px-[260px] py-[10px] relative w-full">
                    {/* 두바이 초코 파르페 */}
                    <div className="flex flex-col h-[588px] items-center justify-center px-[30px] w-[335px]">
                        <div className="flex flex-col h-[354px] items-center justify-center p-[10px] w-full">
                            <img src={imgParfait} alt="두바이 파르페" className="h-[330px] object-contain" />
                        </div>
                        <div className="flex flex-col gap-[10px] h-[138px] items-center justify-center px-[33px] py-[18px] text-center mt-[10px]">
                            <p className="font-medium text-[20px] text-black whitespace-nowrap">두바이 st. 빠작 초코 파르페</p>
                            <div className="text-[#575757] text-[17px] font-normal leading-[25px] w-full">
                                <p>빠작빠작 씹히는 카다이프를</p>
                                <p>초코와 버무려 올린 달콤 바삭</p>
                                <p>초코파르페</p>
                            </div>
                        </div>
                        <p className="font-medium text-[#c1312f] text-[20px] text-center whitespace-nowrap font-bold mt-auto mb-[20px]">7,500원</p>
                    </div>

                    {/* 두바이 쫀득 초코 식빵 */}
                    <div className="flex flex-col h-[588px] items-center justify-center px-[30px] w-[335px]">
                        <div className="flex flex-col h-[348px] items-center justify-center p-[10px] w-full">
                            <img src={imgBread} alt="두바이 식빵" className="h-[258px] object-contain" />
                        </div>
                        <div className="flex flex-col gap-[10px] h-[138px] items-center justify-center px-[33px] py-[18px] text-center mt-[10px]">
                            <p className="font-medium text-[20px] text-black whitespace-nowrap">두바이 쫀득 초코 식빵</p>
                            <div className="text-[#575757] text-[17px] font-normal leading-[25px] w-full">
                                <p>달콤한 초코 큐브 식빵</p>
                                <p>사이에두쫀쿠가 쏙! 들어간</p>
                                <p>두바이 스타일 디저트</p>
                            </div>
                        </div>
                        <p className="font-medium text-[#c1312f] text-[20px] text-center whitespace-nowrap font-bold mt-auto mb-[20px]">7,900원</p>
                    </div>

                    {/* COMING SOON 카드 1 */}
                    <div className="flex flex-col h-[588px] items-center justify-center px-[30px] w-[335px]">
                        <div className="flex flex-col h-[327px] items-center justify-center p-[10px] w-full">
                            <img src={imgComingSoon} alt="커밍순" className="h-[137px] object-contain" />
                        </div>
                        <div className="flex flex-col gap-[12px] h-[138px] items-center justify-center px-[33px] py-[18px] mt-[10px]">
                            <p className="font-bold text-[#49301b] text-[28px] text-center tracking-tighter whitespace-nowrap">COMING SOON</p>
                            <div className="bg-[#49301b] h-[43px] flex items-center justify-center rounded-[50px] w-[220px] mt-[5px]">
                                <p className="font-bold text-center text-white tracking-wide">
                                    <span className="text-[18px]">2026. 02.25. </span>
                                    <span className="text-[16px] font-medium">WED</span>
                                </p>
                            </div>
                        </div>
                        <div className="mt-auto mb-[20px] h-[20px]"></div> {/* Spacer */}
                    </div>

                    {/* COMING SOON 카드 2 */}
                    <div className="flex flex-col h-[588px] items-center justify-center px-[30px] w-[335px]">
                        <div className="flex flex-col h-[327px] items-center justify-center p-[10px] w-full">
                            <img src={imgComingSoon} alt="커밍순" className="h-[137px] object-contain" />
                        </div>
                        <div className="flex flex-col gap-[12px] h-[138px] items-center justify-center px-[33px] py-[18px] mt-[10px]">
                            <p className="font-bold text-[#49301b] text-[28px] text-center tracking-tighter whitespace-nowrap">COMING SOON</p>
                            <div className="bg-[#49301b] h-[43px] flex items-center justify-center rounded-[50px] w-[220px] mt-[5px]">
                                <p className="font-bold text-center text-white tracking-wide">
                                    <span className="text-[18px]">2026. 02.25. </span>
                                    <span className="text-[16px] font-medium">WED</span>
                                </p>
                            </div>
                        </div>
                        <div className="mt-auto mb-[20px] h-[20px]"></div> {/* Spacer */}
                    </div>

                    {/* 좌우 슬라이드 화살표 */}
                    <button className="absolute left-[80px] hover:opacity-70 transition-opacity">
                        <img src={scrollLeft} alt="prev" className="h-[70px] object-contain" />
                    </button>
                    <button className="absolute right-[80px] hover:opacity-70 transition-opacity">
                        <img src={scrollRight} alt="next" className="h-[70px] object-contain" />
                    </button>
                </div>
            </div>

            {/* 매장 검색 + 프로모션 섹션 */}
            <div className="bg-white flex flex-col items-center w-full">
                {/* 매장 검색 섹션 */}
                <div className="flex flex-col gap-[10px] items-center justify-center h-[260px] w-full mb-[50px]">
                    <p className="font-bold text-[#c1312f] text-[50px] whitespace-nowrap tracking-tight">STORE</p>
                    <p className="font-normal text-[#585858] text-[22px] whitespace-nowrap mb-[20px]">전국에 있는 할리스 매장을 찾아드립니다!</p>

                    <div className="border border-[#c1312f] flex justify-between h-[70px] items-center px-[40px] rounded-[50px] w-[800px] hover:shadow-md transition-shadow cursor-text">
                        <p className="font-normal text-[20px] text-[rgba(88,88,88,0.5)] whitespace-nowrap">매장 명 또는 주소 입력</p>
                        <button className="h-[32px] w-[32px] hover:opacity-70 transition-opacity">
                            <img src={searchIcon} alt="search" className="size-full object-contain" />
                        </button>
                    </div>
                </div>

                {/* 프로모션 배너 (하프 그레이 배경) */}
                <div className="bg-[#e4e4e4] flex flex-col items-center justify-center py-[60px] w-[1920px]">
                    <div className="flex flex-col gap-[30px] items-center justify-center px-[260px] w-full">

                        {/* 1열: 멤버십 & 기프트카드 */}
                        <div className="flex w-full justify-between items-stretch">
                            <Link to="#" className="w-[36%] block shrink-0">
                                <img src={imgMembership} alt="할리스 멤버십" className="w-full h-full object-cover rounded-[30px]" />
                            </Link>
                            <Link to="#" className="w-[62%] block shrink-0">
                                <img src={imgGiftcard} alt="기프트카드" className="w-full h-full object-cover rounded-[30px]" />
                            </Link>
                        </div>

                        {/* 2열: 뉴스 & 크라운이벤트 */}
                        <div className="flex w-full justify-between items-center mt-[10px] gap-[35px]">
                            {/* HOLLY NEWS */}
                            <div className="bg-white flex-1 h-[370px] rounded-[30px] flex items-center shadow-lg px-[70px] group cursor-pointer">
                                <div className="flex flex-col w-[35%] pr-[20px] h-full py-[30px]">
                                    <div className="flex items-center gap-[5px] h-[70px] items-start">
                                        <img src={logoNoText} alt="로고" className="w-[32px] object-contain mt-[50px]" />
                                    </div>
                                    <p className="text-black text-[40px] font-bold mb-[20px] tracking-tight">HOLLY NEWS</p>
                                    <div className="text-[17px] leading-[28px] font-medium text-black mt-[-20px]">
                                        <p>할리스의 다양한 소식들을</p>
                                        <p>전해드립니다.</p>
                                    </div>
                                </div>
                                <div className="w-[65%] flex flex-col pl-[40px] py-[30px] justify-center h-full">
                                    <div className="flex flex-col gap-[20px] mb-[20px]">
                                        {[
                                            { title: '[제휴 안내] SKT 0day 프로모션 제외매장 안내', date: '2026-01-28' },
                                            { title: '[제휴 안내] 2월 KT 고객 보답 프로그램 제외매장 안내', date: '2026-01-21' },
                                            { title: '[제휴 안내] 26년 할리스 M포인트 사용 제외 매장 안내', date: '2025-12-23' },
                                        ].map(({ title, date }) => (
                                            <div key={date} className="flex justify-between items-center text-[#555] text-[17px] hover:text-[#c1312f] transition-colors cursor-pointer w-full">
                                                <p className="truncate pr-[25px] flex-1">{title}</p>
                                                <p className="whitespace-nowrap tabular-nums">{date}</p>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="border border-[#c1312f] w-[32px] h-[32px] flex items-center justify-center rounded-[8px] hover:bg-[#c1312f] transition-colors group/btn shrink-0">
                                        <img src={plusIcon} alt="더보기" className="w-[14px] h-[14px] object-contain filter invert-[.3] sepia-[1] saturate-[74] hue-rotate-[340deg] brightness-[.9] contrast-[1.2] group-hover/btn:brightness-0 group-hover/btn:invert" />
                                    </div>
                                </div>
                            </div>

                            {/* 크라운 이벤트 배너 (비율에 맞춰 꽉 차게) */}
                            <Link to="#" className="h-[400px] max-w-[800px] w-auto rounded-[30px] overflow-hidden block shrink-0 hover:opacity-95 transition-opacity">
                                <img src={imgCrownEvent} alt="크라운적립" className="h-full w-auto object-contain" />
                            </Link>
                        </div>

                    </div>
                </div>
            </div>

            {/* 맨 아래 패딩 조정용 빈 공간 */}
            <div className="h-[20px]"></div>
        </div>
    )
}