const data = {
    "ticket": [
        {
            "name": "Nguoi Lon",
            "description": "Vé 2D",
            "category": "Galaxy",
            "price": 90000,
        },
        {
            "name": "Ve 2D Thanh Vien",
            "description": "Vé 2D Thành Viên",
            "category": "Galaxy",
            "price": 85000,
        },
        {
            "name": "GHE DOI",
            "description": "Vé ghế đôi  (bao gồm 2 vé)",
            "category": "Galaxy",
            "price": 200000,
        }
    ],
    "consession":
    {
        "id": 1,
        "name": "COMBO",
        "concessionItems": [
            {
                "id": "1",
                "headOfficeItemCode": "HOFAM1BIGONLINE",
                "description": "iCombo Friends 1 Big",
                "extendedDescription": "1 BẮP + 3 NƯỚC 32 Oz (LIPTON/SUỐI/DIET PEPSI) + 1 SNACK",
                "imageUrl": "/media/2022/8/19/friendscombo_1660896700501.jpg",
                "price": 139000,
            },
            {
                "id": "2",
                "headOfficeItemCode": "HOFAM2NEWBONINE",
                "description": "iCombo Friends 2 Big",
                "extendedDescription": "2 BẮP + 4 NƯỚC 32 Oz (LIPTON/SUỐI/DIET PEPSI) + 2 SNACK",
                "imageUrl": "/media/2022/8/19/friendscombofamilycombo2_1660896643423.jpg",
                "price": 219000,
            },
            {
                "id": "3",
                "headOfficeItemCode": "HOICOMBO1BEXTRA",
                "description": "iCombo 1 Big Extra",
                "extendedDescription": "1 BẮP + 1 NƯỚC 32 Oz (LIPTON/SUỐI/DIET PEPSI) + 1 SNACK",
                "imageUrl": "/media/2022/8/22/combo122082022_1661161050442.png",
                "price": 99000,
            },
            {
                "id": "4",
                "headOfficeItemCode": "HOICOMBO2BEXTRA",
                "description": "iCombo 2 BIG Extra",
                "extendedDescription": "1 BẮP + 2 NƯỚC 32 Oz (LIPTON/SUỐI/DIET PEPSI) + 1 SNACK",
                "imageUrl": "/media/2022/8/19/combo22022_1660884682886.jpg",
                "price": 120000,
            }
        ]
    }

}
const seatColumnGenarate = (change = 0.5) => {
    const random = () => Math.random() > change ? 1 : 0
    let data = new Array(15).fill({})
    return data.map((e, k) => [{ column: k, status: random() }])
}
const coupleColumnGenarate = (change = 0.5) => {
    const random = () => Math.random() > change ? 1 : 0
    let data = new Array(10).fill({})
    return data.map((e, k) => [{ column: k * 2, status: random() }])
}
export const seat = (a, b) => {
    let seat = ('ABCDEFGHIJKLMNO').split("").map((e, k) => {
        return {
            row: e,
            seat: [
                seatColumnGenarate(a)
            ]
        }
    })
    let coupleSeat = [{
        row: "P",
        seat: [
            coupleColumnGenarate(b)
        ]
    }]
    return {
        seat,
        coupleSeat
    }
}

export const { ticket, consession } = data 
