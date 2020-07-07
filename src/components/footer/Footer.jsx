import React, { useContext } from 'react'
import "./Footer.css";
import { context } from '../context/theme/theme';

export default function Footer() {

    const themeContext = useContext(context);

    const { theme } = themeContext;

    return (
        <>
            <div
                className={`mainFooter ${theme === "light" ? "lightModeFooter" : "nightModeFooter"}`}
            >
                <div className="footerItems whyRashin">
                    <h3>چرا راشین؟</h3>
                    <p>
                        راشين وب حاصل توليد نرم افزاري قدرتمند از سالهاي 1383 تا به اکنون است، نرم افزاري که بارها در پرتال ها، سايت هاي بزرگ تجاري ، فرهنگي و شرکتي به ارائه سرويس پرداخته است. از اواخر سال 95 ايجاد بسترهاي لازم جهت ارايه ي اين نرم افزار به صورت سرويس آنلاين در دستور کار قرار گرفت و با تلاش فراوان متخصصين و مشاورين فني، تجاري و مديريتي در بهار سال 1397 افتتاح گرديد.
                </p>
                </div>
                <div className="footerItems footerLastNews">
                    <h3>آخرین مطالب</h3>
                    {
                        [1, 2, 3, 4].map(item =>
                            <div key={item}>
                                {item}
                            </div>
                        )
                    }
                </div>
                <div className="footerItems footerContactus">
                    <h3>
                        ارتباط با ما
                </h3>
                    <p className="font-weight-bold">
                        اصفهان | خيابان پروين | چهارراه آل خجند| کوچه مسعود صدر (40) | پلاک 7
                </p>
                    <p>
                        <span className="font-weight-bold">پشتیبانی:</span> 32118 - 031
                    </p>
                    <p>
                        <span className="font-weight-bold">فروش:</span> 32118000 - 031
                </p>
                    <p>
                        <span className="font-weight-bold">فکس:</span> 32118118 - 031
                </p>
                    <p>
                        <span className="font-weight-bold">سامانه پیامک:</span> 300083928
                </p>

                    <p>
                        <span className="font-weight-bold">صندوق پستی:</span> 154-81985
                </p>

                    <p><span className="font-weight-bold">کد پستی:</span> 88999-81996</p>
                </div>
                <div className="footerItems footerSlider">
                    slider
                </div>
            </div>
            <div className="footer2">
                <ul className="footerMenus">
                    <li>صفحه اصلی</li>
                    <li>گالری تصاویر</li>
                    <li>قوانین و مقررات</li>
                    <li>اخبار</li>
                    <li>نمایندگان فروش</li>
                    <li>گواهی های حسن انجام کار</li>
                    <li>سوالات متداول</li>
                </ul>
            </div>
        </>
    )
}
