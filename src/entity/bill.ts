import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, Unique, OneToMany} from "typeorm";
@Entity( "bill") 

export class Bill {

    @PrimaryGeneratedColumn() 
    id: number; 

    @Column() 
    invoiceNo: string; 
  
    @Column() 
    totalInvoice: string; 
}