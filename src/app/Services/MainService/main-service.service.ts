import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MainServiceService {

  AllData: any[] = []


  prevPost: any[] = []


  constructor() { }

  getAllMessage() {
    let local = localStorage.getItem('Db')
    if (!local) {
      localStorage.setItem('Db', JSON.stringify([]))
    } else {
      if (local)
        this.AllData = JSON.parse(local)
    }



  }

  postMessage(Val: any) {

    let local = localStorage.getItem('Db')
    if (local) {
      this.prevPost = JSON.parse(local)
      this.prevPost.push(Val)

      localStorage.setItem('Db', JSON.stringify(this.prevPost))

      console.log(this.prevPost)
    }
  }

  removeMsg(Id: any) {

    let filteredData = this.AllData.filter((x, index) => {
      return index !== Id
    })

    this.AllData = filteredData

    localStorage.setItem('Db', JSON.stringify(this.AllData))

  }
}
