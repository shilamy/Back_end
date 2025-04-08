<nav class="sidebar sidebar-offcanvas" id="sidebar">
    <ul class="nav">
      <li class="nav-item">
        <a class="nav-link" href="#">
          <i class="mdi mdi-view-dashboard menu-icon"></i>
          <span class="menu-title">Dashboard</span>
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" data-bs-toggle="collapse" href="#ui-basic" aria-expanded="false" aria-controls="ui-basic">
          <i class="mdi mdi mdi-credit-card menu-icon"></i>
          <span class="menu-title">Contributions</span>
          <i class="menu-arrow"></i>
        </a>
        <div class="collapse" id="ui-basic">
          <ul class="nav flex-column sub-menu">
            <li class="nav-item"> <a class="nav-link" href="{{url('admin/contributions/create')}}">Add New</a></li>
            <li class="nav-item"> <a class="nav-link" href="{{url('admin/contributions/ngumbato')}}">Ngumbato</a></li>
            <li class="nav-item"> <a class="nav-link" href="{{url('admin/contributions/welfare')}}">Welfare contribution</a></li>

          </ul>
        </div>
      </li>
      <li class="nav-item">
        <a class="nav-link" data-bs-toggle="collapse" href="#transactions-menu" aria-expanded="false" aria-controls="transactions-menu">
          <div>
            <i class="mdi mdi-bank-transfer menu-icon"></i>
            <span class="menu-title">Transactions</span>
          </div>
          <i class="menu-arrow"></i>
        </a>
        <div class="collapse" id="transactions-menu">
          <ul class="nav flex-column sub-menu">
            <li class="nav-item">
              <a class="nav-link" href="{{url('admin/transactions/deposits')}}">Deposits</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="{{url('admin/transactions/withdrawals')}}">Withdrawals</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="{{url('admin/transactions/transfers')}}">Transfers</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="{{url('admin/transactions/all')}}">
              View All Transactions
              </a>
            </li>
          </ul>
        </div>
      </li>
      
      <li class="nav-item">
        <a class="nav-link" data-bs-toggle="collapse" href="#savings-menu" aria-expanded="false" aria-controls="savings-menu">
          <div>
            <i class="mdi mdi-coin menu-icon"></i>
            <span class="menu-title">Savings</span>
          </div>
          <i class="menu-arrow"></i>
        </a>
        <div class="collapse" id="savings-menu">
          <ul class="nav flex-column sub-menu">
            <li class="nav-item">
              <a class="nav-link" href="{{url('admin/department/create')}}">Individual</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="{{url('admin/department')}}">Group</a>
            </li>
          </ul>
        </div>
      </li>
      
      <li class="nav-item">
        <a class="nav-link" data-bs-toggle="collapse" href="#investments-menu" aria-expanded="false" aria-controls="investments-menu">
          <div>
            <i class="mdi mdi-chart-line menu-icon"></i>
            <span class="menu-title">Investments</span>
          </div>
          <i class="menu-arrow"></i>
        </a>
        <div class="collapse" id="investments-menu">
          <ul class="nav flex-column sub-menu">
            <li class="nav-item">
              <a class="nav-link" href="{{url('admin/investment/create')}}">New Investment</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="{{url('admin/investment/projects')}}">Projects</a>
            </li>
          </ul>
        </div>
      </li>
      
      <li class="nav-item">
        <a class="nav-link" data-bs-toggle="collapse" href="#accounts-menu" aria-expanded="false" aria-controls="accounts-menu">
          <div>
            <i class="mdi mdi-account-card-details menu-icon"></i>
            <span class="menu-title">Accounts</span>
          </div>
          <i class="menu-arrow"></i>
        </a>
        <div class="collapse" id="accounts-menu">
          <ul class="nav flex-column sub-menu">
            <li class="nav-item">
              <a class="nav-link" href="{{ url('admin/accounts/new') }}">New Member</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="{{ url('admin/accounts/members') }}">Members</a>
            </li>
          </ul>
        </div>
      </li>
      

      <li class="nav-item">
        <a class="nav-link" data-bs-toggle="collapse" href="#loans-menu" aria-expanded="false" aria-controls="loans-menu">
          <div>
            <i class="mdi mdi-cash-multiple menu-icon"></i>
            <span class="menu-title">Loans</span>
          </div>
          <i class="menu-arrow"></i>
        </a>
        <div class="collapse" id="loans-menu">
          <ul class="nav flex-column sub-menu">
            <li class="nav-item">
              <a class="nav-link" href="{{url('admin/loans/individual')}}">Individual Loans</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="{{url('admin/loans/group')}}">Gurantors</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="{{url('admin/loans/all')}}">
                View All Loans
              </a>
            </li>
          </ul>
        </div>
      </li>
      
     
    <li class="nav-item">
      <a class="nav-link" data-bs-toggle="collapse" href="#reports-menu" aria-expanded="false" aria-controls="reports-menu">
        <div>
          <i class="mdi mdi-file-chart menu-icon"></i>
          <span class="menu-title">Reports</span>
        </div>
        <i class="menu-arrow"></i>
      </a>
      <div class="collapse" id="reports-menu">
        <ul class="nav flex-column sub-menu">
          <li class="nav-item">
            <a class="nav-link" href="{{url('admin/reports/individual')}}">Individual Reports</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="{{url('admin/reports/group')}}">Group Reports</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="{{url('admin/reports/all')}}">View All Reports</a>
          </li>
        </ul>
      </div>
    </li>

    <li class="nav-item">
      <a class="nav-link" href="{{url('admin/investment/Settings')}}">
        <i class=" mdi mdi-settings-box menu-icon"></i>
        <span class="menu-title">Settings</span>
      </a>
    </li>
  </ul>
  </nav>

