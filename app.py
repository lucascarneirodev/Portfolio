from flask import Flask, render_template,redirect,request
from flask_mail import Mail,Message #import Mail and Message from flask_mail

app=Flask(__name__)

#Setting the email
mail_settings = {
    "MAIL_SERVER": 'smtp.gmail.com',
    "MAIL_PORT":465,
    "MAIL_USE_TLS":False,
    "MAIL_USE_SSL": True,
    "MAIL_USERNAME":'lucas.dev.sender@gmail.com',
    "MAIL_PASSWORD": 'Luc@50090'
}

app.config.update(mail_settings)#update settings with mail_settings content
mail=Mail(app)#Creating class Mail into app.


#Class to file form info
class Contact:
    def __init__(self,firstname,phone,email,message):
        self.firstname=firstname
        self.phone=phone
        self.email=email
        self.message=message


#Main route to render index.html
@app.route('/')
def index():
    return render_template('index.html')

#Route to send e-mail
@app.route('/send', methods=['GET','POST'])
def send():
    if request.method =='POST':
        #Getting infos from email form
        formContact= Contact(
            request.form['firstname'],
            request.form['phone'],
            request.form['email'],
            request.form['message']
        )
        #creating msg class with current info
        msg = Message(
            subject=f'Mensagem de {formContact.firstname.capitalize()}',
            sender=app.config.get("MAIL_USERNAME"),
            recipients=[app.config.get("MAIL_USERNAME"),formContact.email],
            #E-mail text
            body=f'''{(formContact.firstname).capitalize()} enviou a seguinte mensagem:

        "{formContact.message}"
            
            Minhas informações de contato: 
            Telefone - {formContact.phone}
            E-mail - {formContact.email}
            
            Atenciosamente,
            {formContact.firstname.capitalize()}''')

        mail.send(msg) #sending email
    return render_template('index.html')


if __name__ == '__main__':
    app.run(debug=True)
