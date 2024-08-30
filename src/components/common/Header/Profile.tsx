import React from 'react'
import Link from 'next/link';
import Button from '../Button';
import { useTranslation } from 'react-i18next';

const Profile: React.FC = () => {
  const user = false;

  const { t } = useTranslation();

  return (
    <>
      {user ? (
        <Link href={"/profile"}>
          <div className="flex items-center">
            <img
              className="w-[35px] h-[35px] object-cover rounded-2xl cursor-pointer mr-2"
              src="https://sun61-2.userapi.com/s/v1/ig2/F82Rdc2wAkCAsXNi3o4ODozpS9ScL6LS1tloVZ4rZO1Ac7ScFNycVgYfll7XlnPqhvvV4oQqqWQG3c5qq4N6fs8C.jpg?quality=95&crop=51,16,512,512&as=32x32,48x48,72x72,108x108,160x160,240x240,360x360,480x480&ava=1&cs=200x200"
              alt=""
            />
            <p className="text-sm">Муса Шаулаев</p>
          </div>
        </Link>
      ) : (
        <Link href={"/login"}>
          <Button>{t("login")}</Button>
        </Link>
      )}
    </>
  );
}

export default Profile