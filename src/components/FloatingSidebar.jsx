const SIDEBAR_ITEMS = [
    {
        id: 'logo',
        icon: <img src="/Hollys_Logo.png" alt="Hollys" className="h-[48px] object-contain" />,
        isRound: true,
    },
    {
        id: 'franchise',
        icon: <img src="/FloatingSideBar/logoWhite.png" alt="가맹문의" className="h-[44px] object-contain" />,
        label: '가맹문의',
    },
    {
        id: 'customer',
        icon: <img src="/FloatingSideBar/messageIcon.png" alt="고객문의" className="h-[44px] object-contain" />,
        label: '고객문의',
    },
    {
        id: 'b2b',
        icon: <img src="/FloatingSideBar/coffeeBean.png" alt="기업특판" className="h-[44px] object-contain" />,
        label: '기업특판',
    },
    {
        id: 'truckcafe',
        icon: <img src="/FloatingSideBar/coffeeCar.png" alt="커피차 안내" className="h-[44px] object-contain" />,
        label: '커피차 안내',
    },
]

export default function FloatingSidebar() {
    return (
        <div className="fixed bg-[rgba(87,87,87,0.85)] border-[3px] border-[rgba(87,87,87,0.3)] flex flex-col gap-[12px] h-[582px] items-center right-[24px] overflow-clip py-[15px] rounded-[20px] shadow-[0px_0px_15px_0px_rgba(0,0,0,0.3)] top-1/2 -translate-y-1/2 w-[132px] z-50">
            {SIDEBAR_ITEMS.map(({ id, icon, label, isRound }) => (
                <button
                    key={id}
                    className={`bg-[rgba(255,255,255,0.4)] flex flex-col gap-[10px] items-center justify-center overflow-clip p-[10px] relative shadow-[0px_0px_10px_0px_rgba(0,0,0,0.15)] shrink-0 size-[100px] hover:bg-[rgba(255,255,255,0.6)] transition-colors ${isRound ? 'rounded-[18px]' : 'rounded-[15px]'}`}
                >
                    {icon}
                    {label && (
                        <span className="text-white text-[14px] font-semibold whitespace-nowrap">{label}</span>
                    )}
                </button>
            ))}
        </div>
    )
}
