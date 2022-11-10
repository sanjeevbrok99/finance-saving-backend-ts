import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, Unique, OneToMany} from "typeorm";
@Entity( "beta_testing") 

export class beta_testing {

    @PrimaryGeneratedColumn() 
    id: number; 

    @Column() 
    mob_number:string; 
}