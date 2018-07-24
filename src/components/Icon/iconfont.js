(function(window) {
  var svgSprite =
    '<svg><symbol id="icon-triangle" viewBox="0 0 1024 1024"><path d="M512 74.164l516.987 830.109h-1034.026zM512 270.778l-330.107 529.155h660.214z"  ></path></symbol><symbol id="icon-zaixianxiadan" viewBox="0 0 1024 1024"><path d="M769.649778 59.562667V113.777778H142.222222v796.444444H83.569778C50.972444 910.222222 28.444444 895.715556 28.444444 852.48V57.742222C28.444444 14.563556 45.738667 0 88.746667 0h627.598222c33.735111 0 53.304889 15.701333 53.304889 59.562667zM882.631111 796.444444H316.984889v56.888889H882.631111v-56.888889z m-565.589333-56.888888h565.589333v-56.888889H317.041778v56.888889z m0-113.777778h565.589333v-56.832H317.041778V625.777778z m0-113.777778h565.589333V455.111111H317.041778v56.888889z m565.589333-170.666667H316.984889v56.888889H882.631111V341.333333zM199.111111 968.135111V230.229333C199.111111 182.840889 214.528 170.666667 254.293333 170.666667H937.642667C945.550222 170.666667 995.555556 178.062222 995.555556 228.693333v737.678223c0 39.537778-32.142222 57.628444-58.197334 57.628444H254.407111C227.612444 1024 199.111111 994.645333 199.111111 968.135111z"  ></path></symbol><symbol id="icon-cangkugl" viewBox="0 0 1144 1024"><path d="M390.625882 571.331765h361.411765v-60.235294h-361.411765v60.235294z m0 180.705882h361.411765v-60.235294h-361.411765v60.235294zM571.331765 0L0 450.861176h149.684706v482.002824c0 43.369412 49.392941 60.114824 63.427765 60.114824h714.87247c12.528941 0 64.993882-7.589647 64.993883-61.379765v-480.677647h149.684705L571.331765 0z"  ></path></symbol><symbol id="icon-pingjiasiji" viewBox="0 0 1152 1024"><path d="M832 512a64 64 0 1 1 0-128 64 64 0 0 1 0 128M576 512a64 64 0 1 1 0-128 64 64 0 0 1 0 128M320 512a64 64 0 1 1 0-128 64 64 0 0 1 0 128m704-512H128C63.232 0 0 63.744 0 128v640c0 64.32 63.232 128 128 128h320l128 128 128-128h320c64.768 0 128-63.68 128-128V116.544C1152 52.288 1088.704 0 1024 0"  ></path></symbol><symbol id="icon-dingddd" viewBox="0 0 1024 1024"><path d="M740.32663 823.375181l-114.163315-194.709033h76.16576V395.276969c0-43.003222-34.129541-77.872236-76.222642-77.872236-41.979336 0-76.051994 34.869015-76.051995 77.929119v233.332296c0 85.949561-68.088435 155.630708-152.217753 155.630708-84.072436 0-152.160871-69.624264-152.160871-155.630708V395.276969H169.566937l114.106433-194.595267 114.163315 194.595267H321.784691v233.389179c0 43.003222 34.015776 77.815354 76.051994 77.815354 42.093101 0 76.108877-34.755249 76.108877-77.758471V395.220087c0-85.892679 68.145317-155.68759 152.217753-155.687591 84.129319 0 152.217754 69.738029 152.217754 155.687591v233.389179h76.108877l-114.163316 194.652149zM512 0A511.943117 511.943117 0 1 0 512 1023.886235 511.943117 511.943117 0 0 0 512 0.113765z"  ></path></symbol><symbol id="icon-fabubiaoshu" viewBox="0 0 1024 1024"><path d="M903.529412 361.411765l-421.647059 421.647059H240.941176V542.117647l120.470589-120.470588 361.411764-361.411765H120.470588C55.597176 60.235294 0 117.940706 0 180.705882v722.82353c0 62.825412 57.464471 120.470588 120.470588 120.470588h722.82353c61.138824 0 120.470588-59.452235 120.470588-120.470588V301.176471l-60.235294 60.235294z m0-361.411765L301.176471 602.352941v120.470588h120.470588L1024 120.470588l-120.470588-120.470588z"  ></path></symbol><symbol id="icon-peisddd" viewBox="0 0 1137 1024"><path d="M597.333333 568.888889h-56.888889a28.444444 28.444444 0 0 0-28.444444 28.444444v398.222223a28.444444 28.444444 0 0 0 28.444444 28.444444h56.888889a28.444444 28.444444 0 0 0 28.444445-28.444444v-398.222223a28.444444 28.444444 0 0 0-28.444445-28.444444M568.888889 398.222222a56.888889 56.888889 0 1 1 0-113.777778 56.888889 56.888889 0 0 1 0 113.777778m0-227.555555c-41.813333 0-79.587556 15.587556-109.283556 40.561777A169.699556 169.699556 0 0 0 398.222222 341.333333c0 29.923556 8.362667 57.742222 21.959111 82.147556a169.927111 169.927111 0 0 0 269.368889 38.513778A170.097778 170.097778 0 0 0 739.555556 341.333333a170.097778 170.097778 0 0 0-50.005334-120.661333A169.927111 169.927111 0 0 0 568.888889 170.609778m426.666667 625.777778h-56.888889a28.444444 28.444444 0 0 0-28.444445 28.444444v170.666667a28.444444 28.444444 0 0 0 28.444445 28.444444h56.888889a28.444444 28.444444 0 0 0 28.444444-28.444444v-170.666667a28.444444 28.444444 0 0 0-28.444444-28.444444m-28.444445-170.666667A56.888889 56.888889 0 1 1 967.111111 512a56.888889 56.888889 0 0 1 0 113.777778m120.661333-177.550222a169.073778 169.073778 0 0 0-229.944888-9.443556A169.699556 169.699556 0 0 0 796.444444 568.888889c0 29.923556 8.362667 57.742222 21.959112 82.147555a169.927111 169.927111 0 0 0 269.368888 38.513778A170.097778 170.097778 0 0 0 1137.777778 568.888889a170.097778 170.097778 0 0 0-50.005334-120.661333M540.444444 113.720889h56.888889a28.444444 28.444444 0 0 0 28.444445-28.444445v-56.888888a28.444444 28.444444 0 0 0-28.444445-28.444445h-56.888889a28.444444 28.444444 0 0 0-28.444444 28.444445v56.888888a28.444444 28.444444 0 0 0 28.444444 28.444445m398.222223 227.555555h56.888889a28.444444 28.444444 0 0 0 28.444444-28.444444v-284.444444a28.444444 28.444444 0 0 0-28.444444-28.444445h-56.888889a28.444444 28.444444 0 0 0-28.444445 28.444445v284.444444a28.444444 28.444444 0 0 0 28.444445 28.444444M170.666667 739.555556A56.888889 56.888889 0 1 1 170.666667 625.777778a56.888889 56.888889 0 0 1 0 113.777778m109.283555-186.993778A169.073778 169.073778 0 0 0 170.666667 512a169.528889 169.528889 0 0 0-97.848889 31.175111A170.097778 170.097778 0 0 0 0 682.666667a170.666667 170.666667 0 0 0 170.666667 170.666666c51.313778 0 96.768-23.096889 128.056889-58.936889 26.168889-29.980444 42.609778-68.835556 42.609777-111.729777a169.073778 169.073778 0 0 0-61.383111-130.104889M199.111111 910.222222h-56.888889a28.444444 28.444444 0 0 0-28.444444 28.444445v56.888889a28.444444 28.444444 0 0 0 28.444444 28.444444h56.888889a28.444444 28.444444 0 0 0 28.444445-28.444444v-56.888889a28.444444 28.444444 0 0 0-28.444445-28.444445m-56.888889-455.111111h56.888889a28.444444 28.444444 0 0 0 28.444445-28.444444v-398.222223a28.444444 28.444444 0 0 0-28.444445-28.444444h-56.888889a28.444444 28.444444 0 0 0-28.444444 28.444444v398.222223a28.444444 28.444444 0 0 0 28.444444 28.444444"  ></path></symbol><symbol id="icon-woyaofankui" viewBox="0 0 1024 1024"><path d="M751.445333 416.369778l-323.128889 323.128889a6.371556 6.371556 0 0 1-2.844444 1.592889l-175.388444 39.992888-1.308445 0.113778a6.257778 6.257778 0 0 1-4.266667-1.706666 5.973333 5.973333 0 0 1-1.536-5.575112l39.992889-175.388444a5.745778 5.745778 0 0 1 1.536-2.901333l323.128889-323.072a101.831111 101.831111 0 0 1 143.815111 143.815111M512 0a512 512 0 1 0 0 1024A512 512 0 0 0 512 0"  ></path></symbol><symbol id="icon-sijipbb" viewBox="0 0 1024 1024"><path d="M398.222222 853.333333h127.772445L682.666667 568.888889V455.111111H341.333333v113.777778h170.666667l-113.777778 284.444444z m-341.333333 113.777778h910.222222V341.333333H56.888889v625.777778zM967.111111 113.777778h-170.666667V56.888889c0-16.611556-26.908444-56.888889-43.52-56.888889h-60.245333C676.067556 0 682.666667 40.277333 682.666667 56.888889v56.888889H341.333333V56.888889c0-16.611556 16.611556-56.888889 0-56.888889H284.444444c-16.611556 0-56.888889 40.277333-56.888888 56.888889v56.888889H56.888889c-16.611556 0-56.888889 40.277333-56.888889 56.888889v823.239111A30.151111 30.151111 0 0 0 30.094222 1024h963.811556a30.151111 30.151111 0 0 0 30.094222-30.094222V170.666667c0-16.611556-40.277333-56.888889-56.888889-56.888889z"  ></path></symbol><symbol id="icon-zaitjk" viewBox="0 0 1024 1024"><path d="M749.999158 541.210947l29.318737 26.624 99.166316-61.062736 29.480421-182.164211-38.534737-6.090105-26.624 164.864-92.806737 57.829052zM0 517.497263l157.534316 33.845895v196.931368l275.725473-78.74021V590.686316h-39.397052V512l-149.018948-32.121263L159.097263 399.36l27.378526-169.229474 510.005895 81.00379c3.557053-12.719158 8.030316-24.468211 13.204211-34.762105L139.048421 185.775158 231.747368 23.552 294.265263 0l533.504 84.776421 50.445474 8.030316 57.344 9.10821 88.387368 14.012632-3.125894 80.680421-98.681264 107.573895-44.517052-6.197895 21.557894-133.551158 83.375158 13.204211 1.185685-28.941474-121.047579-19.240421-7.006316 2.640842L770.694737 232.986947c-31.797895 23.390316-68.500211 105.633684-75.722105 191.326316L700.631579 485.052632l70.494316 78.416842L551.343158 512v78.686316H512v118.191158l-354.465684 118.245052v157.480421L0 1023.946105V517.605053z"  ></path></symbol><symbol id="icon-zhanghuzx" viewBox="0 0 1024 1024"><path d="M512 880.64c-128 0-240.64-66.56-307.2-163.84 0-102.4 204.8-158.72 307.2-158.72 102.4 0 307.2 56.32 307.2 158.72-66.56 97.28-179.2 163.84-307.2 163.84M512 153.6c87.04 0 153.6 66.56 153.6 153.6 0 87.04-66.56 153.6-153.6 153.6-87.04 0-153.6-66.56-153.6-153.6 0-87.04 66.56-153.6 153.6-153.6M512 0C230.4 0 0 230.4 0 512s230.4 512 512 512 512-230.4 512-512-230.4-512-512-512"  ></path></symbol><symbol id="icon-about-faq" viewBox="0 0 1024 1024"><path d="M518.023529 615.424c-18.070588 0-30.117647-12.047059-30.117647-30.117647v-57.223529c0-27.105882 12.047059-63.247059 66.258824-90.352942 9.035294-3.011765 18.070588-9.035294 24.094118-15.058823 18.070588-18.070588 30.117647-45.176471 30.117647-72.282353 0-54.211765-39.152941-96.376471-90.352942-96.376471s-90.352941 42.164706-90.352941 96.376471c0 18.070588-12.047059 30.117647-30.117647 30.117647s-30.117647-12.047059-30.117647-30.117647c0-87.341176 66.258824-156.611765 150.588235-156.611765s150.588235 69.270588 150.588236 156.611765c0 45.176471-18.070588 87.341176-48.188236 114.447059-12.047059 12.047059-24.094118 21.082353-39.152941 27.105882-33.129412 18.070588-33.129412 33.129412-33.129412 36.141177v57.223529c0 18.070588-12.047059 30.117647-30.117647 30.117647zM518.023529 675.659294c18.070588 0 30.117647 12.047059 30.117647 30.117647s-12.047059 30.117647-30.117647 30.117647-30.117647-12.047059-30.117647-30.117647 12.047059-30.117647 30.117647-30.117647z"  ></path><path d="M512 1014.964706c-15.058824 0-33.129412-3.011765-48.188235-12.047059l-286.117647-144.564706C141.552941 840.282353 120.470588 807.152941 120.470588 764.988235v-662.588235C120.470588 48.188235 168.658824 0 225.882353 0h575.247059C855.341176 0 903.529412 48.188235 903.529412 105.411765v662.588235c0 39.152941-21.082353 75.294118-57.22353 93.364706l-286.117647 144.564706c-15.058824 6.023529-33.129412 9.035294-48.188235 9.035294zM225.882353 60.235294C201.788235 60.235294 180.705882 81.317647 180.705882 105.411765v662.588235c0 18.070588 9.035294 33.129412 24.094118 39.152941l286.117647 144.564706c12.047059 6.023529 27.105882 6.023529 39.152941 0l286.117647-144.564706c15.058824-6.023529 24.094118-24.094118 24.094118-39.152941v-662.588235c3.011765-24.094118-18.070588-45.176471-42.164706-45.176471h-572.235294z"  ></path></symbol><symbol id="icon-about-order" viewBox="0 0 1024 1024"><path d="M481.556757 525.837838H296.12973c-16.605405 0-27.675676-11.07027-27.675676-27.675676s11.07027-27.675676 27.675676-27.675676h185.427027c16.605405 0 27.675676 11.07027 27.675675 27.675676s-13.837838 27.675676-27.675675 27.675676zM647.610811 680.821622H296.12973c-16.605405 0-27.675676-11.07027-27.675676-27.675676s11.07027-27.675676 27.675676-27.675676h351.481081c16.605405 0 27.675676 11.07027 27.675675 27.675676s-13.837838 27.675676-27.675675 27.675676zM572.886486 835.805405h-276.756756c-16.605405 0-27.675676-11.07027-27.675676-27.675675s11.07027-27.675676 27.675676-27.675676h276.756756c16.605405 0 27.675676 11.07027 27.675676 27.675676s-11.07027 27.675676-27.675676 27.675675z"  ></path><path d="M835.805405 318.27027l-166.054054-163.286486c-22.140541-22.140541-52.583784-33.210811-83.027027-33.210811h-83.027027v-19.372973c0-55.351351-44.281081-102.4-102.4-102.4-55.351351 0-99.632432 44.281081-99.632432 102.4v19.372973H254.616216C199.264865 121.772973 152.216216 168.821622 152.216216 224.172973v683.589189c0 58.118919 47.048649 102.4 102.4 102.4h512c58.118919 0 102.4-47.048649 102.4-102.4V404.064865c2.767568-33.210811-11.07027-63.654054-33.210811-85.794595zM357.016216 102.4c0-27.675676 19.372973-47.048649 47.048649-47.048649s47.048649 19.372973 47.048649 47.048649v19.372973H357.016216v-19.372973zM816.432432 907.762162c0 27.675676-22.140541 47.048649-47.048648 47.048649H254.616216c-27.675676 0-47.048649-22.140541-47.048648-47.048649V224.172973c0-27.675676 22.140541-47.048649 47.048648-47.048649h47.048649v88.562162c0 55.351351 44.281081 102.4 102.4 102.4 16.605405 0 27.675676-11.07027 27.675676-27.675675s-11.07027-27.675676-27.675676-27.675676c-24.908108 0-47.048649-19.372973-47.048649-47.048649V177.124324h229.708108c16.605405 0 33.210811 5.535135 44.281081 19.372973l166.054054 163.286487c11.07027 11.07027 19.372973 27.675676 19.372973 44.281081v503.697297z"  ></path></symbol><symbol id="icon-about-bill" viewBox="0 0 1426 1024"><path d="M1250.742857 1002.057143H168.228571c-76.8 0-142.628571-62.171429-142.628571-142.628572V621.714286h40.228571C131.657143 621.714286 182.857143 566.857143 182.857143 504.685714s-51.2-117.028571-117.028572-117.028571H25.6V146.285714C25.6 69.485714 87.771429 3.657143 168.228571 3.657143h1078.857143C1323.885714 3.657143 1389.714286 65.828571 1389.714286 146.285714v237.714286h-40.228572c-65.828571 0-117.028571 54.857143-117.028571 117.028571s51.2 117.028571 117.028571 117.028572H1389.714286v237.714286c3.657143 80.457143-62.171429 146.285714-138.971429 146.285714zM102.4 691.2v168.228571c0 36.571429 29.257143 69.485714 69.485714 69.485715h1078.857143c36.571429 0 69.485714-29.257143 69.485714-69.485715v-168.228571c-91.428571-14.628571-157.257143-95.085714-157.257142-190.171429s69.485714-175.542857 157.257142-190.171428V146.285714c0-36.571429-29.257143-69.485714-69.485714-69.485714H168.228571c-36.571429 3.657143-65.828571 32.914286-65.828571 69.485714v168.228572c91.428571 14.628571 157.257143 95.085714 157.257143 190.171428s-69.485714 171.885714-157.257143 186.514286z"  ></path><path d="M607.085714 336.457143h-256c-21.942857 0-36.571429-14.628571-36.571428-36.571429s14.628571-36.571429 36.571428-36.571428h256c21.942857 0 36.571429 14.628571 36.571429 36.571428s-18.285714 36.571429-36.571429 36.571429zM914.285714 552.228571H351.085714c-21.942857 0-36.571429-14.628571-36.571428-36.571428s14.628571-36.571429 36.571428-36.571429H914.285714c21.942857 0 36.571429 14.628571 36.571429 36.571429s-18.285714 36.571429-36.571429 36.571428zM786.285714 746.057143H351.085714c-21.942857 0-36.571429-14.628571-36.571428-36.571429s14.628571-36.571429 36.571428-36.571428h435.2c21.942857 0 36.571429 14.628571 36.571429 36.571428s-18.285714 36.571429-36.571429 36.571429z"  ></path></symbol><symbol id="icon-about-account" viewBox="0 0 1341 1024"><path d="M812.137931 981.627586H169.489655v-70.620689h568.496552c-14.124138-155.365517-130.648276-268.358621-286.013793-268.358621-162.427586 0-286.013793 123.586207-286.013793 296.606896h-70.62069c3.531034-158.896552 91.806897-286.013793 222.455172-338.97931-56.496552-42.372414-91.806897-105.931034-91.806896-180.082759 0-127.117241 105.931034-225.986207 240.110345-225.986206 120.055172 0 218.924138 102.4 218.924138 225.986206 0 74.151724-35.310345 141.241379-91.806897 180.082759 130.648276 52.965517 218.924138 183.613793 218.924138 346.041379v35.310345zM462.565517 264.827586c-95.337931 0-169.489655 67.089655-169.489655 155.365517 0 88.275862 74.151724 155.365517 169.489655 155.365518 77.682759 0 148.303448-70.62069 148.303449-155.365518 0-81.213793-67.089655-155.365517-148.303449-155.365517zM1013.406897 286.013793h-233.048276c-21.186207 0-35.310345-14.124138-35.310345-35.310345s14.124138-35.310345 35.310345-35.310345h233.048276c21.186207 0 35.310345 14.124138 35.310344 35.310345s-17.655172 35.310345-35.310344 35.310345zM1140.524138 437.848276H780.358621c-21.186207 0-35.310345-14.124138-35.310345-35.310345s14.124138-35.310345 35.310345-35.310345h363.696551c21.186207 0 35.310345 14.124138 35.310345 35.310345s-17.655172 35.310345-38.841379 35.310345zM928.662069 589.682759h-148.303448c-21.186207 0-35.310345-14.124138-35.310345-35.310345s14.124138-35.310345 35.310345-35.310345h148.303448c21.186207 0 35.310345 14.124138 35.310345 35.310345s-17.655172 35.310345-35.310345 35.310345z"  ></path><path d="M1172.303448 992.22069H158.896552c-77.682759 0-137.710345-63.558621-137.710345-137.710345V158.896552C21.186207 81.213793 84.744828 21.186207 158.896552 21.186207h1013.406896c77.682759 0 137.710345 63.558621 137.710345 137.710345v695.613793c0 77.682759-60.027586 137.710345-137.710345 137.710345zM158.896552 91.806897c-38.841379 0-67.089655 31.77931-67.089655 67.089655v695.613793c0 38.841379 31.77931 67.089655 67.089655 67.089655h1013.406896c38.841379 0 67.089655-31.77931 67.089655-67.089655V158.896552c0-38.841379-31.77931-67.089655-67.089655-67.089655H158.896552z"  ></path></symbol><symbol id="icon-about-stamp" viewBox="0 0 1024 1024"><path d="M978.823529 460.8h30.117647v-66.258824c0-45.176471-30.117647-84.329412-72.282352-99.388235-9.035294-6.023529-18.070588-9.035294-30.117648-12.047059L864.376471 271.058824l-421.647059-240.941177c-42.164706-24.094118-96.376471-9.035294-120.470588 30.117647L289.129412 120.470588c-24.094118-3.011765-48.188235 0-69.270588 12.047059-24.094118 12.047059-42.164706 33.129412-48.188236 60.235294l-27.105882 99.388235h-27.105882C60.235294 292.141176 15.058824 337.317647 15.058824 394.541176V903.529412c0 57.223529 45.176471 102.4 102.4 102.4h786.070588c57.223529 0 102.4-45.176471 102.4-102.4v-66.258824h-30.117647c-36.141176 0-63.247059-27.105882-63.247059-60.235294s27.105882-60.235294 63.247059-60.235294h30.117647v-132.517647h-30.117647c-36.141176 0-63.247059-27.105882-63.247059-60.235294 3.011765-36.141176 30.117647-63.247059 66.258823-63.247059zM412.611765 81.317647L638.494118 210.823529l-289.129412-78.305882 24.094118-42.164706c9.035294-12.047059 27.105882-15.058824 39.152941-9.035294zM228.894118 207.811765c3.011765-12.047059 9.035294-21.082353 21.082353-24.094118 9.035294-6.023529 21.082353-6.023529 33.129411-3.011765l421.647059 114.447059H204.8l24.094118-87.341176zM948.705882 641.505882v21.082353c-54.211765 12.047059-93.364706 60.235294-93.364706 117.458824s39.152941 105.411765 93.364706 117.458823v9.035294c0 24.094118-18.070588 42.164706-42.164706 42.164706H117.458824c-24.094118 0-42.164706-18.070588-42.164706-42.164706v-512c0-24.094118 18.070588-42.164706 42.164706-42.164705h786.070588c24.094118 0 42.164706 18.070588 42.164706 42.164705v9.035295c-54.211765 12.047059-93.364706 60.235294-93.364706 117.458823 3.011765 57.223529 42.164706 105.411765 96.37647 120.470588z"  ></path><path d="M731.858824 530.070588c-18.070588 0-30.117647-12.047059-30.117648-30.117647v-72.282353c0-18.070588 12.047059-30.117647 30.117648-30.117647s30.117647 12.047059 30.117647 30.117647v72.282353c0 15.058824-12.047059 30.117647-30.117647 30.117647zM731.858824 716.8c-18.070588 0-30.117647-12.047059-30.117648-30.117647v-72.282353c0-18.070588 12.047059-30.117647 30.117648-30.117647s30.117647 12.047059 30.117647 30.117647v72.282353c0 18.070588-12.047059 30.117647-30.117647 30.117647zM731.858824 891.482353c-18.070588 0-30.117647-12.047059-30.117648-30.117647v-72.282353c0-18.070588 12.047059-30.117647 30.117648-30.117647s30.117647 12.047059 30.117647 30.117647v72.282353c0 15.058824-12.047059 30.117647-30.117647 30.117647zM292.141176 816.188235c-6.023529 0-9.035294 0-15.058823-3.011764-12.047059-3.011765-21.082353-12.047059-27.105882-24.094118-6.023529-9.035294-6.023529-21.082353-6.02353-30.117647L256 692.705882l-51.2-48.188235c-18.070588-18.070588-21.082353-48.188235-3.011765-69.270588 6.023529-9.035294 18.070588-12.047059 27.105883-15.058824l69.270588-9.035294 30.117647-63.247059c6.023529-12.047059 15.058824-21.082353 27.105882-24.094117 12.047059-3.011765 24.094118-3.011765 36.141177 3.011764 9.035294 6.023529 18.070588 12.047059 21.082353 21.082353l30.117647 63.247059 69.270588 9.035294c27.105882 3.011765 45.176471 27.105882 42.164706 54.211765 0 12.047059-6.023529 21.082353-15.058824 27.105882L499.952941 692.705882l12.047059 66.258824c3.011765 12.047059 0 24.094118-9.035294 36.141176-6.023529 12.047059-18.070588 18.070588-30.117647 21.082353-9.035294 3.011765-21.082353 0-30.117647-6.023529l-66.258824-30.117647L313.223529 813.176471c-6.023529 3.011765-15.058824 3.011765-21.082353 3.011764z m84.329412-105.411764l69.270588 36.141176-12.047058-75.294118 54.211764-51.2-75.294117-12.047058-36.141177-69.270589-36.141176 69.270589-75.294118 12.047058 54.211765 51.2-12.047059 75.294118 69.270588-36.141176z"  ></path></symbol><symbol id="icon-about-pay" viewBox="0 0 1336 1024"><path d="M978.488889 765.155556l-36.977778-45.511112c82.488889-68.266667 128-170.666667 128-278.755555 0-196.266667-153.6-355.555556-341.333333-355.555556s-341.333333 159.288889-341.333334 355.555556c0 31.288889 2.844444 62.577778 11.377778 91.022222l-56.888889 14.222222c-8.533333-34.133333-14.222222-71.111111-14.222222-105.244444 0-227.555556 179.2-415.288889 401.066667-415.288889s401.066667 184.888889 401.066666 415.288889c0 128-54.044444 247.466667-150.755555 324.266667z"  ></path><path d="M685.511111 597.333333c-14.222222-22.755556-31.288889-45.511111-48.355555-62.577777-25.6-25.6-54.044444-45.511111-88.177778-62.577778l-54.044445-25.6 54.044445-28.444445c34.133333-17.066667 65.422222-39.822222 91.022222-65.422222 25.6-25.6 48.355556-56.888889 65.422222-91.022222l28.444445-54.044445 25.6 54.044445c17.066667 34.133333 36.977778 62.577778 62.577777 88.177778 25.6 25.6 54.044444 45.511111 88.177778 62.577777l54.044445 25.6-54.044445 28.444445c-34.133333 17.066667-65.422222 39.822222-91.022222 65.422222-17.066667 17.066667-34.133333 39.822222-48.355556 59.733333l-36.977777-22.755555-48.355556 28.444444z m-62.577778-150.755555c19.911111 14.222222 39.822222 28.444444 56.888889 48.355555 17.066667 17.066667 34.133333 36.977778 48.355556 56.888889 14.222222-22.755556 31.288889-42.666667 51.2-59.733333 17.066667-17.066667 39.822222-34.133333 59.733333-51.2-19.911111-14.222222-39.822222-28.444444-56.888889-48.355556-17.066667-17.066667-34.133333-36.977778-48.355555-56.888889-14.222222 22.755556-31.288889 42.666667-51.2 59.733334-17.066667 19.911111-39.822222 36.977778-59.733334 51.2z"  ></path><path d="M688.355556 1018.311111c-62.577778 0-122.311111-11.377778-176.355556-34.133333-162.133333-68.266667-298.666667-91.022222-406.755556-68.266667-2.844444 0-5.688889 0-11.377777 2.844445-42.666667 2.844444-79.644444-28.444444-82.488889-71.111112L2.844444 682.666667c-2.844444-31.288889 17.066667-62.577778 48.355556-73.955556 105.244444-42.666667 179.2-68.266667 224.711111-76.8 136.533333-28.444444 253.155556-28.444444 347.022222 0 62.577778 19.911111 145.066667 31.288889 247.466667 31.288889 28.444444 0 54.044444 14.222222 73.955556 34.133333 31.288889 36.977778 31.288889 88.177778 2.844444 122.311111 85.333333-17.066667 173.511111-45.511111 258.844444-88.177777 2.844444 0 2.844444-2.844444 5.688889-2.844445 17.066667-8.533333 39.822222-8.533333 56.888889 0s34.133333 22.755556 39.822222 39.822222l8.533334 19.911112c14.222222 34.133333 2.844444 71.111111-28.444445 91.022222-230.4 159.288889-432.355556 238.933333-600.177777 238.933333z m-497.777778-170.666667c99.555556 0 216.177778 25.6 344.177778 79.644445 179.2 73.955556 420.977778 8.533333 719.644444-196.266667 5.688889-5.688889 8.533333-11.377778 5.688889-19.911111l-8.533333-19.911111-8.533334-8.533333c-2.844444-2.844444-8.533333-2.844444-11.377778 0-250.311111 125.155556-494.933333 142.222222-731.022222 56.888889-14.222222-5.688889-22.755556-22.755556-17.066666-36.977778s22.755556-22.755556 36.977777-17.066667c128 45.511111 233.244444 56.888889 310.044445 34.133333 25.6-5.688889 45.511111-17.066667 59.733333-28.444444 17.066667-14.222222 17.066667-39.822222 5.688889-54.044444-8.533333-8.533333-17.066667-14.222222-28.444444-14.222223-108.088889-2.844444-196.266667-14.222222-264.533334-34.133333-85.333333-25.6-190.577778-25.6-315.733333 0-39.822222 8.533333-113.777778 34.133333-213.333333 73.955556-5.688889 2.844444-11.377778 8.533333-11.377778 17.066666l11.377778 164.977778c0 8.533333 8.533333 14.222222 17.066666 14.222222 31.288889-5.688889 62.577778-11.377778 99.555556-11.377778z"  ></path></symbol><symbol id="icon-about-check" viewBox="0 0 1024 1024"><path d="M465.454545 549.236364H204.8c-18.618182 0-31.030303-12.412121-31.030303-31.030303s12.412121-31.030303 31.030303-31.030303H465.454545c18.618182 0 31.030303 12.412121 31.030303 31.030303s-12.412121 31.030303-31.030303 31.030303zM800.581818 679.563636H204.8c-18.618182 0-31.030303-12.412121-31.030303-31.030303s12.412121-31.030303 31.030303-31.030303h595.781818c18.618182 0 31.030303 12.412121 31.030303 31.030303s-15.515152 31.030303-31.030303 31.030303zM633.018182 809.890909H204.8c-18.618182 0-31.030303-12.412121-31.030303-31.030303s12.412121-31.030303 31.030303-31.030303h428.218182c18.618182 0 31.030303 12.412121 31.030303 31.030303s-12.412121 31.030303-31.030303 31.030303z"  ></path><path d="M899.878788 102.4h-65.163636V55.854545c0-18.618182-12.412121-31.030303-31.030304-31.030303s-31.030303 12.412121-31.030303 31.030303v46.545455h-217.212121V55.854545c0-18.618182-12.412121-31.030303-31.030303-31.030303s-31.030303 12.412121-31.030303 31.030303v46.545455h-217.212121V55.854545c0-18.618182-12.412121-31.030303-31.030303-31.030303s-31.030303 12.412121-31.030303 31.030303v46.545455H142.739394C77.575758 102.4 21.721212 155.151515 21.721212 223.418182V899.878788c0 68.266667 55.854545 121.018182 121.018182 121.018182H899.878788c68.266667 0 121.018182-55.854545 121.018182-121.018182V223.418182c0-68.266667-55.854545-121.018182-121.018182-121.018182zM958.836364 899.878788c0 31.030303-27.927273 58.957576-58.957576 58.957576H142.739394c-31.030303 0-58.957576-27.927273-58.957576-58.957576V363.054545h875.054546V899.878788z m0-598.884849H83.781818V223.418182c0-31.030303 27.927273-58.957576 58.957576-58.957576h71.369697v9.309091c0 18.618182 12.412121 31.030303 31.030303 31.030303s31.030303-12.412121 31.030303-31.030303v-9.309091h217.212121v9.309091c0 18.618182 12.412121 31.030303 31.030303 31.030303s31.030303-12.412121 31.030303-31.030303v-9.309091h217.212121v9.309091c0 18.618182 12.412121 31.030303 31.030303 31.030303s31.030303-12.412121 31.030304-31.030303v-9.309091H899.878788c31.030303 0 58.957576 27.927273 58.957576 58.957576v77.575757z"  ></path></symbol><symbol id="icon-insurance" viewBox="0 0 1024 1024"><path d="M465.92 15.36c30.72-20.48 56.32-20.48 92.16 5.12 138.24 102.4 235.52 138.24 414.72 174.08 0 491.52-112.64 675.84-399.36 788.48-10.24 5.12-35.84 10.24-61.44 10.24s-51.2-10.24-61.44-10.24c-286.72-112.64-399.36-296.96-399.36-788.48 163.84-40.96 276.48-76.8 414.72-179.2z m-107.52 189.44c-30.72 92.16-71.68 179.2-133.12 250.88l20.48 61.44c20.48-20.48 40.96-46.08 56.32-66.56v327.68h61.44v-419.84c20.48-40.96 40.96-81.92 56.32-128l-61.44-25.6z m76.8 30.72v204.8h117.76v56.32h-163.84v56.32h112.64c-35.84 61.44-76.8 107.52-128 143.36l30.72 51.2c56.32-46.08 112.64-112.64 148.48-199.68v225.28h56.32v-225.28c35.84 76.8 87.04 143.36 143.36 194.56l35.84-51.2c-56.32-40.96-97.28-92.16-133.12-143.36h117.76v-56.32h-174.08V435.2h122.88v-204.8h-286.72z m240.64 148.48h-184.32v-92.16h184.32v92.16z"  ></path><path d="M465.92 15.36c30.72-20.48 56.32-20.48 92.16 5.12 138.24 102.4 235.52 138.24 414.72 174.08 0 491.52-112.64 675.84-399.36 788.48-10.24 5.12-35.84 10.24-61.44 10.24s-51.2-10.24-61.44-10.24c-286.72-112.64-399.36-296.96-399.36-788.48 163.84-40.96 276.48-76.8 414.72-179.2z m-107.52 189.44c-30.72 92.16-71.68 179.2-133.12 250.88l20.48 61.44c20.48-20.48 40.96-46.08 56.32-66.56v327.68h61.44v-419.84c20.48-40.96 40.96-81.92 56.32-128l-61.44-25.6z m76.8 30.72v204.8h117.76v56.32h-163.84v56.32h112.64c-35.84 61.44-76.8 107.52-128 143.36l30.72 51.2c56.32-46.08 112.64-112.64 148.48-199.68v225.28h56.32v-225.28c35.84 76.8 87.04 143.36 143.36 194.56l35.84-51.2c-56.32-40.96-97.28-92.16-133.12-143.36h117.76v-56.32h-174.08V435.2h122.88v-204.8h-286.72z m240.64 148.48h-184.32v-92.16h184.32v92.16z"  ></path></symbol><symbol id="icon-icon-test" viewBox="0 0 1024 1024"><path d="M512 1024A512 512 0 1 1 512 0a512 512 0 0 1 0 1024zM576 256h-49.152c-18.944 20.096-40.96 37.312-66.048 51.648A338.56 338.56 0 0 1 384 339.2v58.752c52.224-14.336 95.232-37.76 129.024-70.272V768H576V256z"  ></path></symbol><symbol id="icon-dingdandaoru" viewBox="0 0 1024 1024"><path d="M68.52403 767.976482h75.833128a447.959404 447.959404 0 1 0 0-511.953604H68.52403a511.953604 511.953604 0 1 1 0 511.953604zM533.761868 548.540369H32.047336a32.893019 32.893019 0 0 1-31.9971-33.66095c0-18.622312 14.334701-33.724944 31.9971-33.724944h501.586544L432.075084 374.156172a32.893019 32.893019 0 0 1 0-44.79594 29.181355 29.181355 0 0 1 42.620137-0.127989l154.865965 161.649351a35.004828 35.004828 0 0 1 0.255977 47.675679L476.35907 694.383152a31.421152 31.421152 0 0 1-44.987923 0.255976 31.933106 31.933106 0 0 1 0-44.79594L533.761868 548.540369z"  ></path></symbol><symbol id="icon-dayinpeisongdan" viewBox="0 0 1024 1024"><path d="M896 256a128 128 0 0 1 128 128v448h-256v192H256v-192H0V384a128 128 0 0 1 128-128V0h768v256z m0 64H128a64 64 0 0 0-64 64v384h192v-128h512v128h192V384a64 64 0 0 0-64-64z m-576 384v256h384v-256H320zM192 64v192h640V64H192z m0 384h256v64H192V448z"  ></path></symbol><symbol id="icon-feiqidingdan" viewBox="0 0 1024 1024"><path d="M214.656 176.896a448 448 0 0 0 534.4 715.328L214.656 176.896z m60.608-45.312l535.168 714.56A448 448 0 0 0 275.328 131.584zM512 1024A512 512 0 1 1 512 0a512 512 0 0 1 0 1024z"  ></path></symbol><symbol id="icon-icon-test1" viewBox="0 0 1024 1024"><path d="M512 1024A512 512 0 1 1 512 0a512 512 0 0 1 0 1024z m8.064-768c-58.624 0-105.664 16.896-141.184 50.624-36.032 33.792-54.016 78.528-54.016 134.4h66.112c0.576-44.16 12.416-77.632 35.52-100.608 20.48-23.488 50.816-35.2 91.136-35.2 37.632 0 66.944 8.448 87.936 25.344 20.992 16.896 31.488 40.576 31.488 71.04 0 31.872-14.784 61.888-44.352 89.984-14.528 13.12-44.672 33.984-90.368 62.592-58.624 35.2-100.288 64.96-125.056 89.344C339.072 680.064 320 721.6 320 768h384v-51.328H401.472c10.752-34.24 52.736-72.704 125.824-115.328 57.6-33.792 97.408-60.8 119.424-80.896 37.632-35.648 56.448-75.008 56.448-118.144 0-43.648-17.216-79.04-51.584-106.24C617.152 269.44 573.312 256 520.064 256z"  ></path></symbol><symbol id="icon-icon-test2" viewBox="0 0 1024 1024"><path d="M512 1024A512 512 0 1 1 512 0a512 512 0 0 1 0 1024z m4.992-768c-52.864 0-95.168 13.312-126.976 40-34.368 27.136-53.824 64.448-58.496 111.808h62.336c4.096-33.6 16.64-59.136 37.76-76.608 19.968-17.472 48.704-26.24 86.144-26.24 36.48 0 64.384 8.064 83.84 24.192 19.008 15.616 28.544 36.992 28.544 64.192 0 27.52-9.792 48.96-29.248 64.128-19.52 14.72-47.488 22.08-83.84 22.08h-42.368v44.16h44.608c38.464 0 68.224 8.064 89.28 24.192 21.568 16.512 32.32 39.552 32.32 68.992 0 28.48-11.008 52.672-33.088 72.448-24.128 20.224-55.68 30.336-94.656 30.336-33.856 0-62.592-8.512-86.208-25.536-27.2-20.224-41.536-49.664-43.072-88.32H320c4.608 55.232 26.432 97.28 65.408 126.272 33.92 23.936 76.416 35.904 127.744 35.904 56.96 0 103.104-14.464 138.496-43.52 34.88-28.48 52.352-65.024 52.352-109.696 0-28.928-9.216-53.12-27.712-72.448-16.384-18.816-41.024-32.896-73.856-42.048 60.032-17.92 90.048-54.784 90.048-110.4 0-40.96-15.936-73.6-47.744-97.984C612.928 267.968 570.368 256 516.992 256z"  ></path></symbol><symbol id="icon-shanchupeisongdian" viewBox="0 0 1024 1024"><path d="M256 192V0h512v192h256v64H0V192h256z m448 128v640h128V320h64v704H128V320h64v640h128V320h64v640h256V320h64zM320 64v128h384V64H320z"  ></path></symbol><symbol id="icon-hongsedatanhao" viewBox="0 0 1024 1024"><path d="M512 0c282.794667 0 512 229.205333 512 512s-229.205333 512-512 512S0 794.794667 0 512 229.205333 0 512 0z m0 995.555556c266.552889 0 483.555556-217.002667 483.555556-483.555556S778.695111 28.444444 512 28.444444C245.304889 28.444444 28.444444 245.447111 28.444444 512c0 266.695111 217.002667 483.555556 483.555556 483.555556z m0-227.555556c-31.374222 0-56.888889-23.239111-56.888889-51.797333v-10.296889c0-28.586667 25.514667-51.683556 56.888889-51.683556s56.888889 23.096889 56.888889 51.683556v10.410666c0 28.444444-25.514667 51.683556-56.888889 51.683556z m0-512a56.888889 56.888889 0 0 1 56.888889 56.888889v227.555555a56.888889 56.888889 0 1 1-113.777778 0v-227.555555a56.888889 56.888889 0 0 1 56.888889-56.888889z"  ></path></symbol><symbol id="icon-paixianguanli" viewBox="0 0 1080 1024"><path d="M468.701306 568.881304C345.822945 462.272947 284.440652 352.877073 284.440652 240.636792 284.440652 107.803007 399.070235 0 540.437239 0S796.433825 107.746119 796.433825 240.636792c0 112.467834-61.382293 221.863708-184.08999 328.244512H739.545695a227.666298 227.666298 0 0 1 220.782834 172.314147 142.220326 142.220326 0 1 1-58.253446 3.071959A170.721279 170.721279 0 0 0 739.545695 625.769434h-170.664391v116.620667a142.220326 142.220326 0 1 1-56.888131 0V625.769434H341.328782c-76.05943 0-140.513682 49.777114-162.529388 118.497976a142.277214 142.277214 0 1 1-58.253446-3.071959A227.666298 227.666298 0 0 1 341.328782 568.881304h127.372524zM540.437239 398.216913a142.220326 142.220326 0 1 0 0-284.440652 142.220326 142.220326 0 0 0 0 284.440652z"  ></path></symbol><symbol id="icon-qiyongpeisongdian" viewBox="0 0 1024 1024"><path d="M512 1024A512 512 0 1 1 512 0a512 512 0 0 1 0 1024z m0-64A448 448 0 1 0 512 64a448 448 0 0 0 0 896zM423.744 623.552l294.208-294.208a32 32 0 1 1 45.248 45.312l-316.8 316.8a31.872 31.872 0 0 1-45.248 0L265.344 555.584a32 32 0 1 1 45.312-45.248L423.68 623.552z"  ></path></symbol><symbol id="icon-shiyongguize" viewBox="0 0 1024 1024"><path d="M512 1024A512 512 0 1 1 512 0a512 512 0 0 1 0 1024z m0-64A448 448 0 1 0 512 64a448 448 0 0 0 0 896z m7.488-704c57.408 0 102.528 12.416 135.296 37.248 32.832 23.936 49.216 56.96 49.216 99.2 0 30.912-10.88 58.368-32.512 82.304a596.48 596.48 0 0 1-70.08 56.256c-18.176 12.16-32.704 25.408-41.536 38.528-11.136 14.976-17.536 29.696-17.536 49.344v16.192H471.168V618.88c0-23.424 5.568-43.84 16.64-61.184 10.56-20.16 39.872-48.768 88.512-82.944 11.712-9.408 21.952-16.896 30.144-24.384 16.96-17.856 30.592-35.84 30.592-55.104 0-28.16-11.264-40-30.592-55.488-20.48-16.384-52.992-23.68-90.496-23.68-43.392 0-75.904 11.776-97.536 34.752-18.752 20.16-28.16 35.968-28.16 69.76H320c0-48.768 17.28-88.192 51.84-118.208C408.192 271.488 457.344 256 519.488 256z m-17.536 428.288a46.4 46.4 0 0 1 47.616 47.616c0 13.952-4.48 25.6-13.44 34.688a49.344 49.344 0 0 1-34.176 13.696 45.824 45.824 0 0 1-34.112-13.696 47.744 47.744 0 0 1-14.272-34.688 43.52 43.52 0 0 1 14.272-33.92 44.224 44.224 0 0 1 34.112-13.696z"  ></path></symbol><symbol id="icon-huisexiaotanhao" viewBox="0 0 1024 1024"><path d="M512 1024A512 512 0 1 1 512 0a512 512 0 0 1 0 1024z m0-64A448 448 0 1 0 512 64a448 448 0 0 0 0 896zM512 192a64 64 0 0 1 64 64v320a64 64 0 0 1-128 0V256a64 64 0 0 1 64-64z m0 640a64 64 0 1 1 0-128 64 64 0 0 1 0 128z"  ></path></symbol><symbol id="icon-tianjiasiji" viewBox="0 0 1024 1024"><path d="M480 480v-192a32 32 0 0 1 64 0v192h192a32 32 0 0 1 0 64h-192v192a32 32 0 0 1-64 0v-192h-192a32 32 0 0 1 0-64h192zM512 0a512 512 0 1 1 0 1024A512 512 0 0 1 512 0z m0 64a448 448 0 1 0 0 896A448 448 0 0 0 512 64z"  ></path></symbol><symbol id="icon-xiazaimoban" viewBox="0 0 1024 1024"><path d="M256.04608 68.48v75.84a448 448 0 1 0 512 0V68.48a512 512 0 1 1-512 0zM475.50208 533.76V32c0-17.664 15.104-32 33.664-32 18.624 0 33.728 14.336 33.728 32v501.632l107.008-101.568a32.896 32.896 0 0 1 44.8 0 29.184 29.184 0 0 1 0.128 42.624L533.16608 629.568a35.008 35.008 0 0 1-47.68 0.256L329.64608 476.352a31.424 31.424 0 0 1-0.256-44.992 31.936 31.936 0 0 1 44.8 0L475.50208 533.76z"  ></path></symbol><symbol id="icon-xinjianpeisongdian" viewBox="0 0 1024 1024"><path d="M512 1024C227.555556 771.811556 85.333333 569.173333 85.333333 415.971556 85.333333 186.254222 276.366222 0 512 0 747.633778 0 938.666667 186.254222 938.666667 416.028444c0 153.144889-142.222222 355.783111-426.666667 607.971556z m0-84.764444c240.64-219.249778 361.016889-393.671111 361.016889-523.264 0-194.389333-161.621333-351.971556-361.016889-351.971556s-361.016889 157.582222-361.016889 352.028444c0 129.592889 120.32 303.957333 361.016889 523.150223zM314.254222 384h395.491556a32.028444 32.028444 0 1 1 0 64H314.254222a32.028444 32.028444 0 0 1 0-64z m229.717334-165.717333v395.434666a32.028444 32.028444 0 0 1-64 0V218.282667a32.028444 32.028444 0 1 1 64 0z"  ></path></symbol><symbol id="icon-dizhiguanli" viewBox="0 0 1084 1024"><path d="M0 485.135059L546.153412 0 1084.235294 485.135059h-122.277647V963.764706a60.235294 60.235294 0 0 1-60.235294 60.235294H179.019294a60.235294 60.235294 0 0 1-60.235294-60.235294V486.339765L0 485.135059zM361.411765 542.117647v60.235294h361.411764V542.117647H361.411765z m0 180.705882v60.235295h361.411764v-60.235295H361.411765z"  ></path></symbol><symbol id="icon-dingdanguanli" viewBox="0 0 1024 1024"><path d="M660.210526 543.474526h0.10779l-111.562105 279.013053h-132.581053l109.621895-270.066526H350.315789v-107.789474h348.914527l-39.073684 98.842947zM781.473684 121.263158h161.684211a53.894737 53.894737 0 0 1 53.894737 53.894737v754.526316a53.894737 53.894737 0 0 1-53.894737 53.894736H80.842105a53.894737 53.894737 0 0 1-53.894737-53.894736v-754.526316a53.894737 53.894737 0 0 1 53.894737-53.894737h161.684211v-53.894737a53.894737 53.894737 0 1 1 107.789473 0v53.894737h323.368422v-53.894737a53.894737 53.894737 0 0 1 107.789473 0v53.894737z m-700.631579 215.578947v592.842106h862.31579v-592.842106H80.842105z"  ></path></symbol></svg>';
  var script = (function() {
    var scripts = document.getElementsByTagName('script');
    return scripts[scripts.length - 1];
  })();
  var shouldInjectCss = script.getAttribute('data-injectcss');
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~['complete', 'loaded', 'interactive'].indexOf(document.readyState)) {
        setTimeout(fn, 0);
      } else {
        var loadFn = function() {
          document.removeEventListener('DOMContentLoaded', loadFn, false);
          fn();
        };
        document.addEventListener('DOMContentLoaded', loadFn, false);
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn);
    }
    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        init = function() {
          if (!done) {
            done = true;
            fn();
          }
        };
      var polling = function() {
        try {
          d.documentElement.doScroll('left');
        } catch (e) {
          setTimeout(polling, 50);
          return;
        }
        init();
      };
      polling();
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null;
          init();
        }
      };
    }
  };
  var before = function(el, target) {
    target.parentNode.insertBefore(el, target);
  };
  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild);
    } else {
      target.appendChild(el);
    }
  };
  function appendSvg() {
    var div, svg;
    div = document.createElement('div');
    div.innerHTML = svgSprite;
    svgSprite = null;
    svg = div.getElementsByTagName('svg')[0];
    if (svg) {
      svg.setAttribute('aria-hidden', 'true');
      svg.style.position = 'absolute';
      svg.style.width = 0;
      svg.style.height = 0;
      svg.style.overflow = 'hidden';
      prepend(svg, document.body);
    }
  }
  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true;
    try {
      document.write(
        '<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>',
      );
    } catch (e) {
      console && console.log(e);
    }
  }
  ready(appendSvg);
})(window);
