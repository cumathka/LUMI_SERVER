export default function populateRemidnerTemplate(pFirstName, pLastName){

   return`
   <!DOCTYPE html>
   <html lang="en" xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office">
   <head>
	   <meta charset="UTF-8">
	   <meta name="viewport" content="width=device-width,initial-scale=1">
	   <meta name="x-apple-disable-message-reformatting">
	   <title></title>
	   <!--[if mso]>
	   <noscript>
		   <xml>
			   <o:OfficeDocumentSettings>
				   <o:PixelsPerInch>96</o:PixelsPerInch>
			   </o:OfficeDocumentSettings>
		   </xml>
	   </noscript>
	   <![endif]-->
	   <style>
		   table, td, div, h1, p {font-family: Arial, sans-serif;}
	   </style>
   </head>
   <body style="margin:0;padding:0;">
	   <table role="presentation" style="width:100%;border-collapse:collapse;border:0;border-spacing:0;background:#ffffff;">
		   <tr>
			   <td align="center" style="padding:0;">
				   <table role="presentation" style="width:602px;border-collapse:collapse;border:1px solid #cccccc;border-spacing:0;text-align:left;">
					   <tr>
						   <td align="center" style="padding:40px 0 30px 0;background:#F17720;">
							   <img src="https://i.ibb.co/wNx1dxY/LUMI.png" alt="LUMI" border="0" width="300" style="height:auto;display:block;">
						   </td>
					   </tr>
					   <tr>
						   <td style="padding:36px 30px 42px 30px;">
							   <table role="presentation" style="width:100%;border-collapse:collapse;border:0;border-spacing:0;">
								   <tr>
									   <td style="padding:0 0 36px 0;color:#153643;">
										   <h1 style="font-size:24px;margin:0 0 20px 0;font-family:Arial,sans-serif;text-align: center;">Welcome ${pFirstName} !</h1>
										   <h1 style="font-size:24px;margin:0 0 20px 0;font-family:Arial,sans-serif;text-align: center;"> <em>we're happy to have you with us </em> </h1>
										   <p style="margin:0 0 12px 0;font-size:16px;line-height:24px;font-family:Arial,sans-serif;">Thank's for joining the LUMI, if you have any questions, don't hesitate to react out. we will be ready to help you in any way we can. Make sure you have fun!</p>
										   <!-- <p style="margin:0;font-size:16px;line-height:24px;font-family:Arial,sans-serif;"><a href="http://www.example.com" style="color:#ee4c50;text-decoration:underline;">In tempus felis blandit</a></p> -->
										   <!-- <a href="https://www.vecteezy.com/free-vector/web">Web Vectors by Vecteezy</a> -->
									   </td>
								   </tr>
								   <tr>
									   <td style="padding:0;">
										   <table role="presentation" style="width:100%;border-collapse:collapse;border:0;border-spacing:0;" >
											   <tr>
												   <td style="width:260px;padding:0;vertical-align:top;color:#153643;" >
													   <p style="margin:0 0 25px 0;font-size:16px;line-height:24px;font-family:Arial,sans-serif;"><img src="https://i.ibb.co/SVRygz1/vecteezy-say-no-to-plastic-bags-concept-vector-design-cloth-or-7875365.jpg" alt="vecteezy-say-no-to-plastic-bags-concept-vector-design-cloth-or-7875365" width="260"  style="height:25vh;display:block;"></p>
													   <p style="margin:0 0 12px 0;font-size:16px;line-height:24px;font-family:Arial,sans-serif;">Create quizzes for free and share them with others.</p>
													   <!-- <p style="margin:0;font-size:16px;line-height:24px;font-family:Arial,sans-serif;"><a href="http://www.example.com" style="color:#ee4c50;text-decoration:underline;">Blandit ipsum volutpat sed</a></p> -->
												   </td>
												   <td style="width:20px;padding:0;font-size:0;line-height:0;">&nbsp;</td>
												   <td style="width:260px;padding:0;vertical-align:top;color:#153643;">
													   <p style="margin:0 0 25px 0;font-size:16px;line-height:24px;font-family:Arial,sans-serif;"><img src="https://i.ibb.co/wh67QMr/vector-mountaineer-celebrates-the-conquest-of-the-summit.jpg" alt="vector-mountaineer-celebrates-the-conquest-of-the-summit"  width="260"  style="height:25vh;;display:block;" ></p>
													   <p style="margin:0 0 12px 0;font-size:16px;line-height:24px;font-family:Arial,sans-serif;"> See how much you know by taking different quizzes</p>
													   <!-- <p style="margin:0;font-size:16px;line-height:24px;font-family:Arial,sans-serif;"><a href="http://www.example.com" style="color:#ee4c50;text-decoration:underline;">In tempus felis blandit</a></p> -->
												   </td>
											   </tr>
										   </table>
									   </td>
								   </tr>
							   </table>
						   </td>
					   </tr>
					   <tr>
						   <td style="padding:30px;background:#F17720;">
							   <table role="presentation" style="width:100%;border-collapse:collapse;border:0;border-spacing:0;font-size:9px;font-family:Arial,sans-serif;">
								   <tr>
									   <td style="padding:0;width:50%;" align="left">
										   <p style="margin:0;font-size:14px;line-height:16px;font-family:Arial,sans-serif;color:#ffffff;">
											   &reg; LUMI <script type="text/javascript">var year = new Date();document.write(year.getFullYear());</script> <br/>
										   </p>
									   </td>
									   <td style="padding:0;width:50%;" align="right">
										   <table role="presentation" style="border-collapse:collapse;border:0;border-spacing:0;">
											   <tr>
												   <td style="padding:0 0 0 10px;width:38px;">
													   <!-- <a href="http://www.twitter.com/" style="color:#ffffff;"><img src="https://assets.codepen.io/210284/tw_1.png" alt="Twitter" width="38" style="height:auto;display:block;border:0;" /></a> -->
												   </td>
												   <td style="padding:0 0 0 10px;width:38px;">
													   <!-- <a href="http://www.facebook.com/" style="color:#ffffff;"><img src="https://assets.codepen.io/210284/fb_1.png" alt="Facebook" width="38" style="height:auto;display:block;border:0;" /></a> -->
												   </td>
											   </tr>
										   </table>
									   </td>
								   </tr>
							   </table>
						   </td>
					   </tr>
				   </table>
			   </td>
		   </tr>
	   </table>
   </body>
   </html>
   
   `
}