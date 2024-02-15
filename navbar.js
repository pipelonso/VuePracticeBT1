Vue.component('mynav' ,{
    props:['pagename'],
    data: function () {
        return {
            onehref : 'pagina 1',
            twohref : 'pagina 2',
            threehref : 'pagina 3',
            fourhref : 'pagina 4',
            fivehref : 'pagina 5'
        }
    },
    mounted() {

        var pagename = this.pagename;
        if (pagename == 'index'){
            this.onehref = '#';
            this.twohref = 'pages/pagetwo.html';
            this.threehref = 'pages/pagethree.html';
            this.fourhref = 'pages/pagefour.html'
            this.fivehref = 'pages/pagefive.html'
        }else{
            this.onehref = '../index.html';
            this.twohref = 'pagetwo.html';
            this.threehref = 'pagethree.html';
            this.fourhref = 'pagefour.html';
            this.fivehref = 'pagefive.html';
        }

    },
    template:
    '<div class="bg-dark navbar p-2 text-white" style="border:none; border-bottom:solid; border-color: red;">' + 
        '<h1 class="nav-item">Practica Vue 2</h1>' +
        '<div>' +
            '<button class="btn btn-dark" @click="gotopageone">INICIO</button>'+
            '<button class="btn btn-dark" @click="gotopagetwo">SEGUNDA</button>'+
            '<button class="btn btn-dark" @click="gotopagethree">TERCERA</button>'+
            '<button class="btn btn-dark" @click="gotopagefour">CUARTA</button>'+
            '<button class="btn btn-dark" @click="gotopagefive">QUINTA</button>'+
        '</div>' +
    '</div>',
    methods: {
        gotopageone : function() {

            window.location.href = this.onehref;

        },
        gotopagetwo : function() {

            window.location.href = this.twohref;

        },
        gotopagethree : function() {

            window.location.href = this.threehref;

        },
        gotopagefour : function() {

            window.location.href = this.fourhref;

        },
        gotopagefive : function() {

            window.location.href = this.fivehref;

        }
        


    }
})