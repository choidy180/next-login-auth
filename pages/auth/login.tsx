import type { NextPage } from 'next'
import { signIn, signOut, useSession } from 'next-auth/react'
import styles from '../../styles/Home.module.css'

const Login: NextPage = () => {
  // session에서 OAuth 사용자 정보 확인하기
  const { data: session } = useSession();
  console.log(session);
  // 사용자 정보 있으면, 이메일과 로그아웃 버튼 출력
  return (
    <div className={styles.container}>
      {session ? (
        <>
          Signed in as {session?.user?.email} <br/>
          <button onClick={()=>signOut()}>Sign out</button>
        </>
      ):(
        <>
          Not Signed in <br/>
          <button onClick={()=> signIn()}>Sign in</button>
        </>
      )}
      <button onClick={(e)=>{
        e.preventDefault();
        signIn("google");
      }}>Google Login</button>
    </div>
  )
}

export default Login
