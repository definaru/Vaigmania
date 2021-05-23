import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document 
{
  render() {
        return (
            <Html lang="en">
                <Head>
                    <meta charSet="utf-8"/>
                    <link href='/access/img/favicon.png' rel='shortcut icon' type='image/x-icon'/>
                </Head>        
                <body className="scroll">
                    <Main />
                    <NextScript />
                    
                    <a href="http://extremetracking.com/open?login=felerium" target="_blank" style={{display: 'none'}}>
                        <img src="http://t1.extreme-dm.com/i.gif" id="EXim" alt="eXTReMe Tracker" />
                    </a>

                    {/* <!-- EXref="";top.document.referrer?EXref=top.document.referrer:EXref=document.referrer;//--> */}

                    {/* var EXlogin='felerium' // Login
                    var EXvsrv = 's9' // VServer
                    EXs=screen;EXw=EXs.width;navigator.appName!="Netscape"?
                    EXb=EXs.colorDepth:EXb=EXs.pixelDepth;EXsrc="src";
                    navigator.javaEnabled()==1?EXjv="y":EXjv="n";
                    EXd=document;EXw?"":EXw="na";EXb?"":EXb="na";
                    EXref?EXref=EXref:EXref=EXd.referrer;
                    EXd.write("<img "+EXsrc+"=http://e0.extreme-dm.com",
                    "/"+EXvsrv+".g?login="+EXlogin+"&amp;",
                    "jv="+EXjv+"&amp;j=y&amp;srw="+EXw+"&amp;srb="+EXb+"&amp;",
                    "l="+escape(EXref)+" height=1 width=1>"); */}


                    <div id="neXTReMe" style={{display: 'none'}}>
                        <img 
                            height="1" 
                            width="1" 
                            alt="" 
                            src="http://e0.extreme-dm.com/s9.g?login=felerium&amp;j=n&amp;jv=n" 
                        />
                    </div>
                </body>
            </Html>
        )
    }
}