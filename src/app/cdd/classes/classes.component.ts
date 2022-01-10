import { Generos } from './../modelos/generos';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.scss']
})
export class ClassesComponent implements OnInit {

  livrosGeneros: Generos[] = [
    {_idGenero: "0", nomeGenero: "Generalidades", decimalGenero: "00", livrosGenero: 501},
    {_idGenero: "1", nomeGenero: "Filosofia e Psicologia", decimalGenero: "00", livrosGenero: 280},
    {_idGenero: "2", nomeGenero: "Religião", decimalGenero: "00", livrosGenero: 324},
    {_idGenero: "3", nomeGenero: "Ciências Sociais", decimalGenero: "00", livrosGenero: 532},
    {_idGenero: "4", nomeGenero: "Línguas", decimalGenero: "00", livrosGenero: 125},
    {_idGenero: "5", nomeGenero: "Ciências Naturais e Matemática", decimalGenero: "00", livrosGenero: 163},
    {_idGenero: "6", nomeGenero: "Tecnologia e Ciências Aplicadas", decimalGenero: "00", livrosGenero: 734},
    {_idGenero: "7", nomeGenero: "Artes", decimalGenero: "00", livrosGenero: 613},
    {_idGenero: "8", nomeGenero: "Literatura e Retórica", decimalGenero: "00", livrosGenero: 132},
    {_idGenero: "9", nomeGenero: "Geografia, História e Biografia", decimalGenero: "00", livrosGenero: 731},
  ];
  visaoColunas = ['_idGenero', 'nomeGenero', 'decimalGenero']

  constructor() {}

  ngOnInit(): void {
  }

}
