import { Entity, Column, PrimaryGeneratedColumn, BeforeInsert, CreateDateColumn, UpdateDateColumn, Index } from 'typeorm';
    @Entity('parent')
    export class Parent {
      @PrimaryGeneratedColumn()
      id: number;

      @Column()
      name: string;

      @Column()        // here we will create relationship with user model using foreign key
      userId:number

      @Column({ nullable: true })
      firstName: string ;
    
     
      @Column({ nullable: true })
      lastName: string;

      @Column()
      dob: Date;
    
      @Column({ nullable: true })
      no_of_kids: string;
      
      @Column({ nullable: true })
      co_brand_rupay_customer_id: string | null;
    
      @Column({ nullable: true })
      kyc_status: string | null;
    
      @Column({ nullable: true })
      document_type: string | null;
    
      @Column({ nullable: true })
      document_no: string | null;

      @Column({ nullable: true })
      owner: number;
   
      @Column({ nullable: true })
      kyc_requested: string | null;

      @Column({ nullable: true })
      pic_selected: string | null; 

      @Column({ nullable: true })
      kyc_schedule_date: Date;
   
      @Column({ nullable: true })
      isGoldKyc: string | null;

      @Column({ nullable: true })
      employment: string | null;

      @Column({ nullable: true })
      gender: string | null; 
   
      @Column({ nullable: true })
      address: string | null;

      @Column({ nullable: true })
      address1: string | null;

      @Column({ nullable: true })
      crnNo: string | null;

      @Column({ nullable: true })
      isGoldRegistered: string | null;
    
    }