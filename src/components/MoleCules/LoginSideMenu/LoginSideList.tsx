import { v4 as uuidv4 } from "uuid";
import LoginSideMenuItem from "../../Atoms/LoginSideMenu/LoginSideItem";
export default function LoginSideMenuList() {
  const list = [
    { text: "재고재고와 함께하기", link: "/together" },
    { text: "Q&A", link: "/Question" },
    { text: "재고재고 개발일기", link: "/developStory" },
  ];

  return (
    <ul className="w-full h-full">
      {list.map((item) => {
        return (
          <LoginSideMenuItem
            key={uuidv4()}
            item={item.text}
            route={item.link}
          />
        );
      })}
    </ul>
  );
}
