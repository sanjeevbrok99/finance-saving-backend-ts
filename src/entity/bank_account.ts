import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, Unique, OneToMany} from "typeorm";
@Entity( "bank_account") 

export class bank_account {

    @PrimaryGeneratedColumn() 
    id: number; 

    @Column() 
    created_on: Date; 
 
    @Column() 
    account_no: string;
    
    @Column() 
    ifsc_code: string; 
 
    @Column() 
    account_holder_name: string;
    
    @Column() 
    beneficiary_id: string; 
 
    @Column() 
    account_holder_email: string;
    
    @Column() 
    account_holder_mob_no: string; 
 
    @Column() 
    address: string; 

    @Column() 
    city: string;
    
    @Column() 
    state: string; 
 
    @Column() 
    pincode: number; 

    @Column() 
    bank_name: string; 
}