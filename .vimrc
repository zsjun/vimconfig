set nocompatible              " be iMproved, required
filetype off                  " required

" set the runtime path to include Vundle and initialize
set rtp+=~/.vim/bundle/Vundle.vim
call vundle#begin()
" alternatively, pass a path where Vundle should install plugins
"call vundle#begin('~/some/path/here')

" let Vundle manage Vundle, required
Plugin 'VundleVim/Vundle.vim'
" vim-go
Plugin 'fatih/vim-go'
" All of your Plugins must be added before the following line
call vundle#end()            " required
filetype plugin indent on    " required
" To ignore plugin indent changes, instead use:
"filetype plugin on
"
" Brief help
" :PluginList       - lists configured plugins
" :PluginInstall    - installs plugins; append `!` to update or just :PluginUpdate
" :PluginSearch foo - searches for foo; append `!` to refresh local cache
" :PluginClean      - confirms removal of unused plugins; append `!` to auto-approve removal
"
" see :h vundle for more details or wiki for FAQ
" Put your non-Plugin stuff after this line
" 设置utf-8编码
set encoding=utf-8
set langmenu=zh_CN.UTF-8
language message zh_CN.UTF-8
" 文件保存时使用的编码
"fileencoding=utf-8
" 打开文件进行解码的猜测列表，优先以utf-8打开
set fileencodings=utf-8
" termencoding
set termencoding=utf-8
" 设置自动补全
set wildmenu
" 缩进为2个空格宽度
set tabstop=2
" 自动缩进使用的空格数
set shiftwidth=2
" 编辑插入tab时，把tab算作的空格数
set softtabstop=2
" 缩进使用空格
set expandtab
" 自动缩进
set autoindent
" 打开语法高亮
syntax on
" 设置molokai
let g:molokai_original = 1
let g:rehash256 = 1
" 主题配置
syntax enable
set background=dark
colorscheme molokai
" 高亮显示行和列
set cursorcolumn
set cursorline
" 显示行号
set number
"设置搜索高亮"
set hlsearch
" 解决插入模式下delete/backspce键失效问题
set backspace=2
" 显示括号匹配
set showmatch
