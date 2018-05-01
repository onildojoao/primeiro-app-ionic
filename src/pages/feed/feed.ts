import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
})
export class FeedPage {
  public objeto_feed = {
    titulo: "Titulo feed",
    data: "05/05/05",
    descricao: "Descricao do texto",
    qnt_likes: "10 likes",
    qnt_comments: "5 likes",
    time_comment: "10h atras"
  }
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  public nome_usuario:string="Teste codigo";

  public somaDoisNumeros(n1:number, n2:number): void {
  alert(n1 + n2);
}
  ionViewDidLoad() {
    //this.somaDoisNumeros(10, 10);
    console.log('ionViewDidLoad FeedPage');
  }

}
