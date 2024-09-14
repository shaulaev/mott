import React, {useState} from 'react'
import MainLayout from '@/components/layout/MainLayout'
import Input from '@/components/common/Input'
import Form from '@/components/Form'
import Button from '@/components/common/Button'
import Link from 'next/link'
import { useTranslation } from 'react-i18next'

const login = () => {
  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const {t} = useTranslation()

  return (
    <MainLayout header={false} footer={false} title={"Login"} position="center">
      <Form title={t("login")}>
        <Input
          name="username"
          label={t("your_login")}
          value={username}
          setValue={setUsername}
        />
        <Input
          name="password"
          label={t("your_password")}
          value={password}
          setValue={setPassword}
        />
        <Button classes="w-full">{t("submit")}</Button>
        <div>
          <Link className="block" href={"/forgot"}>
            {t("forgot_password")}
          </Link>
          <Link className="block" href={"/registration"}>
            {t("no_account")}
          </Link>
        </div>
      </Form>
    </MainLayout>
  );
}

export default login