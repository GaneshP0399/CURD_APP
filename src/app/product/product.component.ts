import { Component, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
export interface Product {
  name?: string;
  price?: number;
  category?: string;
}
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  products!: Product[]
  bardetails!: Product[]
  form: FormGroup;
  formName: String = ''
  visible: boolean = false;
  // colorScheme: any = {domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']};
  productIndex!: number;

  constructor(private fb: FormBuilder,private messageService: MessageService) {
    
    this.form = this.fb.group({
      name: ['',[Validators.required,Validators.minLength(2),Validators.maxLength(80),Validators.pattern('^[a-zA-Z ]*$')]],
      category: ['',[Validators.required, Validators.minLength(2),Validators.maxLength(80),Validators.pattern('^[a-zA-Z ]*$'),]],
      price: ['',[Validators.required,  Validators.pattern(/^\d+(\.\d{1,2})?$/)],
      ],
    });
  }

  get formControl(): any {
    return this.form.controls;
  }

  ngOnInit() {
     this.products = [
      
    {
      name: 'Black Watch',
      price: 72,
      category: 'Accessories',
    },
    {
      name: 'Blue Band',
      price: 79,
      category: 'Fitness',
    },
    ]
    this.bardetails = this.products
   
  }
  // Patch Product Details
  edit(index: number, item: any, fName: any) {
    this.visible = true;
    this.formName = fName;
    this.productIndex = index
    this.form.patchValue({
      name: item.name,
      price: item.price,
      category: item.category
    })
  }

  // Open Modal
  open(fName: any) {
    this.visible = true;
    this.form.reset()
    this.formName = fName;
    this.form.reset()
  }

  // Update Product Details
  update() {
    if (this.form.invalid) return
    this.products[this.productIndex] = this.form.value; // Assigning obj 
    this.bardetails = JSON.parse(JSON.stringify(this.products)) // This code is to trigger child component ngOnChanges()
    this.visible = false;
    this.messageService.add({severity:'success', summary:'Service Message', detail:'Data updated Successfully'});

  }

  // Delete Product Details
  delete(index:number){
    this.products.splice(index, 1); // remove array obj
    this.bardetails = JSON.parse(JSON.stringify(this.products))
    this.messageService.add({severity:'success', summary:'Service Message', detail:'Data Deleted Successfully'});
  }

  // Delete Product Details
  addNewProduct() {
    if (this.form.invalid) return 
    const isDuplicate = this.products.some(
      (product) => product.name?.toLowerCase()  === this.form.value.name?.toLowerCase() 
    );
    if(isDuplicate) return  this.messageService.add({severity:'info', summary:'Service Message', detail:'Data Is Exist'});
    this.products.push(this.form.value); // Add new object in array
    this.bardetails = JSON.parse(JSON.stringify(this.products))
    this.visible = false;
    this.messageService.add({severity:'success', summary:'Service Message', detail:'Data Added Successfully'});

  }


}
