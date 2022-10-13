import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, Unique, OneToMany} from "typeorm";
import * as bcrypt from "bcryptjs";
@Entity( "directus_user") 
@Unique(['username'])
export class directus_user {

    @PrimaryGeneratedColumn({ type: "int", name: "id" }) 
    id: number; 

    @Column("varchar", { name: "firstName", length: 199 }) 
    firstName: string; 
 
    @Column("varchar", {name: "lastFirst", length:199}) 
    lastName: string; 

    @Column("varchar", {name:"phoneNumber", length:11}) 
    phoneNumber: number; 
  
    @Column("varchar", { name: "username" }) 
    username:string; 

    @Column("varchar", { name: "address", nullable: true }) 
    address: string; 
    
    @Column("varchar", { name: "email", nullable: true }) 
    email: string; 
   
    @Column() 
    password:string; 
 

    @Column() 
    @CreateDateColumn() 
    createAt:Date 
 
    @Column() 
    @UpdateDateColumn() 
    updateAt:Date 
 
    hashPassword(){ 
        this.password=bcrypt.hashSync(this.password, 10); 
    } 
 
    checkIfUnencryptedPasswordIsValid(unencryptedPassword: string){ 
        return bcrypt.compareSync(unencryptedPassword, this.password); 
    } 
     
    @Column({ nullable: true })
    gender: string | null; 
 
   
    @Column({ nullable: true })
    token: string | null;

    @Column({ nullable: true })
    timezone: string | null;

    @Column({ nullable: true })
    locale: string | null;

    @Column({ nullable: true })
    locale_options: string | null;

    @Column({ nullable: true })
    avtar: string | null;

    @Column({ nullable: true })
    company: string | null;

    @Column({ nullable: true })
    title: string | null;

    @Column({ nullable: true })
    email_notifications: string | null;

    @Column({ nullable: true })
    last_page: string | null;

    @Column({ nullable: true })
    external_id: string | null;

    @Column({ nullable: true })
    theme: string | null;

    @Column({ nullable: true })
    _2fa_secret: string | null;

    @Column({ nullable: true })
    password_reset_token: string | null;

    @Column({ nullable: true })
    verified_contact_no: string | null;

    @Column({ nullable: true })
    last_access_on: string | null;

    @Column({ nullable: true })
    otp: string | null;

    @Column({ nullable: true })
    otp_issued_time: string | null;

    @Column({ nullable: true })
    new_email: string | null;

    @Column({ nullable: true })
    new_mob: string | null;

    @Column({ nullable: true })
    google_auth_token: string | null;

    @Column({ nullable: true })
    google_profile: string | null;

    @Column({ nullable: true })
    firebase_reg_id: string | null;

    @Column({ nullable: true })
    passcode: string | null;

    @Column({ nullable: true })
    singup_token: string | null;

    @Column({ nullable: true })
    signup_token_issued_time: string | null;
    
    @Column({ nullable: true })
    city: string | null;

    @Column({ nullable: true })
    pin_code: string | null;

    @Column({ nullable: true })
    linking_code: string | null;

    @Column({ nullable: true })
    state: string | null;

    @Column({ nullable: true })
    is_root: string | null;
    
   
}
